import { useState, useRef } from 'react';
import { Lock, Key, Shield, Eye, Zap, Plus, Minus, X as XIcon, ArrowRight, ArrowLeft, Code2, Copy, Check, Maximize2, ZoomIn, ZoomOut } from 'lucide-react';

interface Node {
  id: string;
  type: 'input' | 'operation' | 'output';
  label: string;
  color: string;
  x: number;
  y: number;
  data?: any;
}

interface Connection {
  from: string;
  to: string;
}

export function InteractiveBuilder() {
  const [nodes, setNodes] = useState<Node[]>([
    { id: 'input1', type: 'input', label: 'Private Input', color: 'green', x: 100, y: 150, data: { value: 'birth_year' } },
    { id: 'op1', type: 'operation', label: 'Calculate Age', color: 'purple', x: 300, y: 150, data: { operation: 'subtract' } },
    { id: 'op2', type: 'operation', label: 'Compare >', color: 'blue', x: 500, y: 150, data: { operation: 'compare' } },
    { id: 'op3', type: 'operation', label: 'Verify', color: 'orange', x: 700, y: 150, data: { operation: 'verify' } },
    { id: 'output1', type: 'output', label: 'Is 18+', color: 'pink', x: 900, y: 150, data: { type: 'boolean' } },
    // Additional nodes for chain
    { id: 'input2', type: 'input', label: 'Public Input', color: 'cyan', x: 100, y: 300, data: { value: 'current_year' } },
    { id: 'op4', type: 'operation', label: 'Hash', color: 'purple', x: 300, y: 300, data: { operation: 'hash' } },
    { id: 'op5', type: 'operation', label: 'Range Check', color: 'orange', x: 500, y: 300, data: { operation: 'range' } },
  ]);

  const [connections, setConnections] = useState<Connection[]>([
    { from: 'input1', to: 'op1' },
    { from: 'op1', to: 'op2' },
    { from: 'op2', to: 'op3' },
    { from: 'op3', to: 'output1' },
    // Additional connections
    { from: 'input2', to: 'op4' },
    { from: 'op4', to: 'op5' },
    { from: 'op5', to: 'op3' },
    { from: 'input2', to: 'op1' },
  ]);

  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [lastTouchDistance, setLastTouchDistance] = useState<number | null>(null);
  const [showSidebar, setShowSidebar] = useState(false); // Mobile sidebar toggle
  const canvasRef = useRef<HTMLDivElement>(null);

  const components = {
    inputs: [
      { id: 'private-input', label: 'Private Input', icon: Lock, color: 'green', type: 'input' },
      { id: 'public-input', label: 'Public Input', icon: Eye, color: 'cyan', type: 'input' },
    ],
    operations: [
      { id: 'add', label: 'Add', icon: Plus, color: 'purple', type: 'operation' },
      { id: 'subtract', label: 'Subtract', icon: Minus, color: 'purple', type: 'operation' },
      { id: 'multiply', label: 'Multiply', icon: XIcon, color: 'purple', type: 'operation' },
      { id: 'compare-gt', label: 'Compare >', icon: ArrowRight, color: 'blue', type: 'operation' },
      { id: 'compare-lt', label: 'Compare <', icon: ArrowLeft, color: 'blue', type: 'operation' },
    ],
    advanced: [
      { id: 'range-check', label: 'Range Check', icon: Shield, color: 'orange', type: 'operation' },
      { id: 'hash', label: 'Hash', icon: Key, color: 'purple', type: 'operation' },
      { id: 'verify', label: 'Verify', icon: Check, color: 'green', type: 'operation' },
    ],
  };

  const addNode = (componentId: string, componentData: any) => {
    const newNode: Node = {
      id: `node-${Date.now()}`,
      type: componentData.type,
      label: componentData.label,
      color: componentData.color,
      x: 300 + Math.random() * 100,
      y: 150 + Math.random() * 150,
      data: { componentId },
    };
    setNodes([...nodes, newNode]);
  };

  const removeNode = (nodeId: string) => {
    setNodes(nodes.filter(n => n.id !== nodeId));
    setConnections(connections.filter(c => c.from !== nodeId && c.to !== nodeId));
    if (selectedNode === nodeId) setSelectedNode(null);
  };

  const handleResetView = () => {
    setPan({ x: 0, y: 0 });
    setZoom(1);
  };

  const handleZoomIn = () => {
    setZoom(prevZoom => Math.min(2, prevZoom + 0.2));
  };

  const handleZoomOut = () => {
    setZoom(prevZoom => Math.max(0.5, prevZoom - 0.2));
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setZoom(prevZoom => Math.max(0.5, Math.min(2, prevZoom + delta)));
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.target === canvasRef.current || (e.target as HTMLElement).closest('.canvas-background')) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      setIsDragging(true);
      setDragStart({ x: touch.clientX - pan.x, y: touch.clientY - pan.y });
    } else if (e.touches.length === 2) {
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const distance = Math.sqrt((touch2.clientX - touch1.clientX) ** 2 + (touch2.clientY - touch1.clientY) ** 2);
      setLastTouchDistance(distance);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && e.touches.length === 1) {
      const touch = e.touches[0];
      setPan({
        x: touch.clientX - dragStart.x,
        y: touch.clientY - dragStart.y,
      });
    } else if (e.touches.length === 2) {
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const currentDistance = Math.sqrt((touch2.clientX - touch1.clientX) ** 2 + (touch2.clientY - touch1.clientY) ** 2);
      if (lastTouchDistance !== null) {
        const delta = currentDistance - lastTouchDistance;
        setZoom(prevZoom => Math.max(0.5, Math.min(2, prevZoom + delta * 0.01)));
      }
      setLastTouchDistance(currentDistance);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setLastTouchDistance(null);
  };

  const generateCode = () => {
    const code = `pragma circom 2.0.0;

// Auto-generated by KryptonX Visual Circuit Builder

template CustomCircuit() {
    // Inputs
    signal input birth_year;
    signal input current_year;
    
    // Outputs
    signal output is_18_plus;
    
    // Operations
    signal temp_age;
    temp_age <== current_year - birth_year;
    
    // Range check
    signal range_valid;
    range_valid <== temp_age >= 0 && temp_age <= 150;
    
    // Age verification
    signal age_check;
    age_check <== temp_age >= 18;
    
    // Final output
    is_18_plus <== age_check && range_valid;
}

component main {public [current_year]} = CustomCircuit();`;
    return code;
  };

  const copyCode = () => {
    navigator.clipboard.writeText(generateCode());
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const getNodeColor = (color: string) => {
    const colors: any = {
      green: { bg: 'from-green-600/30 to-green-500/30', border: 'border-green-500', glow: 'shadow-green-500/50', text: 'text-green-400' },
      cyan: { bg: 'from-cyan-600/30 to-cyan-500/30', border: 'border-cyan-500', glow: 'shadow-cyan-500/50', text: 'text-cyan-400' },
      purple: { bg: 'from-purple-600/30 to-purple-500/30', border: 'border-purple-500', glow: 'shadow-purple-500/50', text: 'text-purple-400' },
      pink: { bg: 'from-pink-600/30 to-pink-500/30', border: 'border-pink-500', glow: 'shadow-pink-500/50', text: 'text-pink-400' },
      blue: { bg: 'from-blue-600/30 to-blue-500/30', border: 'border-blue-500', glow: 'shadow-blue-500/50', text: 'text-blue-400' },
      orange: { bg: 'from-orange-600/30 to-orange-500/30', border: 'border-orange-500', glow: 'shadow-orange-500/50', text: 'text-orange-400' },
    };
    return colors[color] || colors.purple;
  };

  // Calculate path for curved connections
  const getConnectionPath = (x1: number, y1: number, x2: number, y2: number) => {
    const midX = (x1 + x2) / 2;
    return `M ${x1} ${y1} Q ${midX} ${y1}, ${midX} ${(y1 + y2) / 2} T ${x2} ${y2}`;
  };

  return (
    <div className="flex flex-col lg:flex-row h-[700px] lg:h-[700px] min-h-[600px] gap-4">
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="lg:hidden fixed bottom-6 right-6 z-30 bg-gradient-to-r from-purple-600 to-cyan-600 text-white p-4 rounded-full shadow-2xl shadow-purple-500/50"
      >
        <Plus className={`w-6 h-6 transition-transform ${showSidebar ? 'rotate-45' : ''}`} />
      </button>

      {/* Left Sidebar - Components */}
      <div className={`${showSidebar ? 'fixed inset-0 z-20 flex items-center justify-center bg-slate-950/90 backdrop-blur-xl lg:relative lg:bg-transparent' : 'hidden'} lg:block lg:w-64`}>
        <div className="w-80 max-w-[90vw] lg:w-64 bg-slate-900/50 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-4 overflow-y-auto max-h-[80vh] lg:max-h-full">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">Components</h3>
            <button
              onClick={() => setShowSidebar(false)}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              <XIcon className="w-5 h-5" />
            </button>
          </div>
          
          {/* Inputs */}
          <div className="mb-6">
            <h4 className="text-gray-400 text-xs uppercase mb-2 font-semibold">Inputs</h4>
            <div className="space-y-2">
              {components.inputs.map((comp) => {
                const Icon = comp.icon;
                const colors = getNodeColor(comp.color);
                return (
                  <button
                    key={comp.id}
                    onClick={() => addNode(comp.id, comp)}
                    className={`w-full bg-gradient-to-r ${colors.bg} border ${colors.border} rounded-lg p-3 text-left hover:scale-105 transition-all text-white flex items-center gap-2 ${colors.glow} shadow-lg`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{comp.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Operations */}
          <div className="mb-6">
            <h4 className="text-gray-400 text-xs uppercase mb-2 font-semibold">Basic Operations</h4>
            <div className="space-y-2">
              {components.operations.map((comp) => {
                const Icon = comp.icon;
                const colors = getNodeColor(comp.color);
                return (
                  <button
                    key={comp.id}
                    onClick={() => addNode(comp.id, comp)}
                    className={`w-full bg-gradient-to-r ${colors.bg} border ${colors.border} rounded-lg p-3 text-left hover:scale-105 transition-all text-white flex items-center gap-2 ${colors.glow} shadow-lg`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{comp.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Advanced */}
          <div className="mb-6">
            <h4 className="text-gray-400 text-xs uppercase mb-2 font-semibold">Advanced</h4>
            <div className="space-y-2">
              {components.advanced.map((comp) => {
                const Icon = comp.icon;
                const colors = getNodeColor(comp.color);
                return (
                  <button
                    key={comp.id}
                    onClick={() => addNode(comp.id, comp)}
                    className={`w-full bg-gradient-to-r ${colors.bg} border ${colors.border} rounded-lg p-3 text-left hover:scale-105 transition-all text-white flex items-center gap-2 ${colors.glow} shadow-lg`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{comp.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Center Canvas */}
      <div className="flex-1 bg-slate-950/50 backdrop-blur-xl border border-purple-500/20 rounded-2xl relative overflow-hidden">
        {/* Zoom Controls */}
        <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
          <button
            onClick={handleZoomIn}
            className="bg-slate-800/80 hover:bg-slate-700 border border-cyan-500/30 text-white p-2 rounded-lg transition-all hover:scale-105 shadow-lg shadow-cyan-500/20"
            title="Zoom In"
          >
            <ZoomIn className="w-5 h-5" />
          </button>
          <button
            onClick={handleZoomOut}
            className="bg-slate-800/80 hover:bg-slate-700 border border-purple-500/30 text-white p-2 rounded-lg transition-all hover:scale-105 shadow-lg shadow-purple-500/20"
            title="Zoom Out"
          >
            <ZoomOut className="w-5 h-5" />
          </button>
          <div className="bg-slate-800/80 border border-purple-500/30 text-white px-2 py-1 rounded-lg text-xs text-center">
            {Math.round(zoom * 100)}%
          </div>
        </div>

        {/* Reset Button */}
        <div className="absolute top-4 right-4 z-20">
          <button
            onClick={handleResetView}
            className="bg-slate-800/80 hover:bg-slate-700 border border-purple-500/30 text-white p-2 rounded-lg transition-all hover:scale-105"
            title="Reset View"
          >
            <Maximize2 className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Helper Text */}
        <div className="lg:hidden absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-slate-800/90 backdrop-blur-xl border border-purple-500/30 text-white px-4 py-2 rounded-full text-xs text-center">
          📱 Swipe to pan
        </div>

        {/* Canvas */}
        <div
          ref={canvasRef}
          className="canvas-background absolute inset-0 touch-none"
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onWheel={handleWheel}
        >
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(147, 51, 234, 0.15) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            backgroundPosition: `${pan.x}px ${pan.y}px`
          }}></div>

          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-40" style={{ left: '20%', top: '30%' }}></div>
            <div className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-40" style={{ left: '60%', top: '50%', animationDelay: '1s' }}></div>
            <div className="absolute w-2 h-2 bg-pink-400 rounded-full animate-pulse opacity-40" style={{ left: '80%', top: '20%', animationDelay: '2s' }}></div>
          </div>

          <div
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
              transition: isDragging ? 'none' : 'transform 0.1s ease-out',
            }}
            className="relative w-full h-full"
          >
            {/* Connections with curved lines */}
            <svg className="absolute inset-0 pointer-events-none" style={{ width: '1500px', height: '800px' }}>
              <defs>
                <linearGradient id="gradient-connection-builder" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8" />
                </linearGradient>
                <filter id="glowBuilder">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              {connections.map((conn, idx) => {
                const fromNode = nodes.find(n => n.id === conn.from);
                const toNode = nodes.find(n => n.id === conn.to);
                if (!fromNode || !toNode) return null;

                const x1 = fromNode.x + 120;
                const y1 = fromNode.y + 35;
                const x2 = toNode.x;
                const y2 = toNode.y + 35;

                const path = getConnectionPath(x1, y1, x2, y2);

                return (
                  <g key={idx}>
                    <path
                      d={path}
                      stroke="url(#gradient-connection-builder)"
                      strokeWidth="3"
                      fill="none"
                      filter="url(#glowBuilder)"
                    />
                    {/* Animated circle moving along path */}
                    <circle r="4" fill="#06b6d4" filter="url(#glowBuilder)">
                      <animateMotion
                        dur="3s"
                        repeatCount="indefinite"
                        path={path}
                      />
                    </circle>
                    {/* Arrow head */}
                    <circle cx={x2} cy={y2} r="5" fill="#06b6d4" opacity="0.8" />
                  </g>
                );
              })}
            </svg>

            {/* Nodes */}
            <div className="relative z-10">
              {nodes.map((node) => {
                const colors = getNodeColor(node.color);
                return (
                  <div
                    key={node.id}
                    onClick={(e) => { e.stopPropagation(); setSelectedNode(node.id); }}
                    style={{ 
                      position: 'absolute', 
                      left: node.x, 
                      top: node.y,
                    }}
                    className={`bg-gradient-to-br ${colors.bg} backdrop-blur-xl border-2 ${colors.border} rounded-xl p-4 cursor-pointer transition-all hover:scale-110 ${colors.glow} shadow-xl min-w-[120px] ${selectedNode === node.id ? 'ring-4 ring-cyan-400 scale-110' : ''}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-xs uppercase font-semibold">{node.type}</span>
                      <button
                        onClick={(e) => { e.stopPropagation(); removeNode(node.id); }}
                        className="text-gray-400 hover:text-red-400 transition-colors"
                      >
                        <XIcon className="w-3 h-3" />
                      </button>
                    </div>
                    <div className={`text-white font-semibold mb-1 ${colors.text}`}>{node.label}</div>
                    <div className="text-xs text-gray-400">
                      {node.type === 'input' && '🔒 private'}
                      {node.type === 'operation' && `⚡ ${node.data?.componentId || 'op'}`}
                      {node.type === 'output' && '✓ boolean'}
                    </div>
                    {/* Connection dots */}
                    <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-400 rounded-full border-2 border-slate-900 animate-pulse"></div>
                    <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-purple-400 rounded-full border-2 border-slate-900"></div>
                  </div>
                );
              })}
            </div>

            {/* Instructions */}
            {nodes.length === 0 && (
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
                <div className="text-center">
                  <Zap className="w-16 h-16 text-purple-400 mx-auto mb-4 animate-pulse" />
                  <p className="text-gray-400 text-lg">Click components on the left to add nodes</p>
                  <p className="text-gray-500 text-sm mt-2">Drag canvas to pan</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Sidebar - Info & Code */}
      <div className="hidden lg:block w-80 space-y-4">
        {/* Circuit Info */}
        <div className="bg-slate-900/50 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-4">
          <h3 className="text-white mb-4 font-semibold">Circuit Info</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Nodes:</span>
              <span className="text-white font-semibold bg-purple-500/20 px-2 py-1 rounded">{nodes.length}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Connections:</span>
              <span className="text-white font-semibold bg-cyan-500/20 px-2 py-1 rounded">{connections.length}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Est. Constraints:</span>
              <span className="text-white font-semibold bg-orange-500/20 px-2 py-1 rounded">{nodes.length * 5}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Est. Proof Time:</span>
              <span className="text-cyan-400 font-semibold">{'< 1s'}</span>
            </div>
          </div>
        </div>

        {/* Generated Code */}
        <div className="bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-4 flex-1">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">Generated Circom</h3>
            <button
              onClick={copyCode}
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              {copiedCode ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
          <div className="bg-slate-950/80 rounded-lg p-3 max-h-64 overflow-y-auto border border-cyan-500/20">
            <pre className="text-cyan-300 text-xs font-mono whitespace-pre-wrap">
              {generateCode()}
            </pre>
          </div>
          <button
            onClick={copyCode}
            className="w-full mt-3 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white px-4 py-2 rounded-lg transition-all text-sm font-semibold shadow-lg shadow-cyan-500/30"
          >
            {copiedCode ? '✓ Copied!' : 'Copy Code'}
          </button>
        </div>
      </div>
    </div>
  );
}

// Helper X icon component
function X({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}