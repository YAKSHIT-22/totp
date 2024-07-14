import React from 'react'
import ReactFlow, {
  Controls,
  Background,
  MiniMap,
  Handle,
  Position,
} from "reactflow";
import "reactflow/dist/style.css";
import { edges } from "../../components/Edges";
import { nodes } from "../../components/Nodes";

const AuthFlow = () => {
  return (
    <section className="bg-grid min-h-screen w-full h-full flex items-start flex-col justify-start relative">
      <div className="flex items-center justify-center top-2 left-0 right-0 absolute">
          <p className="px-6 py-2 text-6xl font-semibold text-black">
            Auth Flow
          </p>
        </div>
      <div className='main_container'>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView
          size={"small"}
        >
          <Background />
          <MiniMap />
          <Controls />
        </ReactFlow>
        </div>
    </section>
  )
}

export default AuthFlow