"use client";

import React, { useEffect, useState } from 'react';

const WorkflowDiagram: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full max-w-[580px] h-[580px]">
      <style jsx>{`
        @keyframes slideUpFade {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          70% {
            transform: scale(1.08);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes drawPath {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes glowPulse {
          0%, 100% { 
            filter: drop-shadow(0 0 8px rgba(214, 245, 226, 0.6)); 
          }
          50% { 
            filter: drop-shadow(0 0 14px rgba(214, 245, 226, 0.8)); 
          }
        }

        @keyframes slideFromRight {
          0% {
            opacity: 0;
            transform: translateX(20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .workflow-step {
          transition: all 0.3s ease;
        }

        .workflow-step:hover {
          transform: translateY(-2px);
        }

        .step-1 {
          animation: slideUpFade 0.5s ease-out 0.3s forwards;
          opacity: 0;
        }

        .step-2 {
          animation: slideUpFade 0.5s ease-out 0.7s forwards;
          opacity: 0;
        }

        .step-3 {
          animation: slideUpFade 0.5s ease-out 1.1s forwards;
          opacity: 0;
        }

        .step-4 {
          animation: slideUpFade 0.5s ease-out 1.5s forwards;
          opacity: 0;
        }

        .step-5 {
          animation: slideUpFade 0.5s ease-out 1.9s forwards;
          opacity: 0;
        }

        .add-step {
          animation: slideUpFade 0.5s ease-out 2.5s forwards;
          opacity: 0;
        }

        .completion {
          animation: slideFromRight 0.6s ease-out 2.7s forwards;
          opacity: 0;
        }

        .completion-glow {
          animation: glowPulse 0.5s ease-out 3.4s forwards;
        }

        .completion-check {
          animation: scaleIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) 3.0s forwards;
          transform: scale(0);
        }

        .caption {
          animation: slideUpFade 0.5s ease-out 3.3s forwards;
          opacity: 0;
        }

        .path-1 {
          animation: drawPath 0.4s ease-out 0.4s forwards;
        }

        .path-2 {
          animation: drawPath 0.4s ease-out 0.8s forwards;
        }

        .path-3-manager {
          animation: drawPath 0.5s ease-out 1.2s forwards;
        }

        .path-3-operations {
          animation: drawPath 0.6s ease-out 1.6s forwards;
        }

        .path-manager-completion {
          animation: drawPath 0.5s ease-out 2.0s forwards;
        }

        .path-operations-completion {
          animation: drawPath 0.5s ease-out 2.2s forwards;
        }
      `}</style>
      
      {/* SVG Path Connectors with Arrows */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 580 580" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arrowhead" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
            <polygon points="0 0, 7 3.5, 0 7" fill="#9CA3AF" />
          </marker>
        </defs>
        
        {/* Path 1→2 */}
        <line 
          x1="155" 
          y1="90" 
          x2="215" 
          y2="90" 
          stroke="#D1D5DB" 
          strokeWidth="1.5" 
          markerEnd="url(#arrowhead)"
          strokeDasharray="60"
          strokeDashoffset="60"
          className={isVisible ? "path-1" : ""}
        />
        
        {/* Path 2→3 */}
        <line 
          x1="315" 
          y1="90" 
          x2="375" 
          y2="90" 
          stroke="#D1D5DB" 
          strokeWidth="1.5" 
          markerEnd="url(#arrowhead)"
          strokeDasharray="60"
          strokeDashoffset="60"
          className={isVisible ? "path-2" : ""}
        />
        
        {/* Path 3→Manager */}
        <path 
          d="M 440 110 Q 440 160, 340 190" 
          stroke="#D1D5DB" 
          strokeWidth="1.5" 
          fill="none" 
          markerEnd="url(#arrowhead)"
          strokeDasharray="120"
          strokeDashoffset="120"
          className={isVisible ? "path-3-manager" : ""}
        />
        
        {/* Path 3→Operations */}
        <path 
          d="M 440 110 Q 440 200, 340 260" 
          stroke="#D1D5DB" 
          strokeWidth="1.5" 
          fill="none" 
          markerEnd="url(#arrowhead)"
          strokeDasharray="150"
          strokeDashoffset="150"
          className={isVisible ? "path-3-operations" : ""}
        />
        
        {/* Path Manager→Completion */}
        <path 
          d="M 385 210 Q 450 210, 485 260" 
          stroke="#D1D5DB" 
          strokeWidth="1.5" 
          fill="none" 
          markerEnd="url(#arrowhead)"
          strokeDasharray="120"
          strokeDashoffset="120"
          className={isVisible ? "path-manager-completion" : ""}
        />
        
        {/* Path Operations→Completion */}
        <path 
          d="M 385 280 Q 430 280, 485 285" 
          stroke="#D1D5DB" 
          strokeWidth="1.5" 
          fill="none" 
          markerEnd="url(#arrowhead)"
          strokeDasharray="100"
          strokeDashoffset="100"
          className={isVisible ? "path-operations-completion" : ""}
        />
      </svg>

      {/* Step 1: report submitted */}
      <div className={`absolute top-[70px] left-[30px] flex items-center gap-3 ${isVisible ? 'step-1' : ''}`}>
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <div className="bg-gray-50 rounded-lg px-4 py-2.5 workflow-step border border-gray-100">
          <p className="text-xs font-normal text-gray-700 lowercase">report submitted</p>
        </div>
      </div>

      {/* Step 2: initial review */}
      <div className={`absolute top-[70px] left-[220px] flex items-center gap-3 ${isVisible ? 'step-2' : ''}`}>
        <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        <div className="bg-amber-50 rounded-lg px-4 py-2.5 workflow-step border border-amber-100">
          <p className="text-xs font-normal text-gray-700 lowercase">initial review</p>
        </div>
      </div>

      {/* Step 3: quality verification */}
      <div className={`absolute top-[70px] left-[380px] flex items-center gap-3 ${isVisible ? 'step-3' : ''}`}>
        <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
        <div className="bg-emerald-50 rounded-lg px-4 py-2.5 workflow-step border border-emerald-100">
          <p className="text-xs font-normal text-gray-700 lowercase">quality verification</p>
        </div>
      </div>

      {/* Step 4: manager approval */}
      <div className={`absolute top-[190px] left-[140px] flex items-center gap-3 ${isVisible ? 'step-4' : ''}`}>
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div className="bg-blue-50 rounded-lg px-4 py-2.5 workflow-step border border-blue-100">
          <p className="text-xs font-normal text-gray-700 lowercase">manager approval</p>
        </div>
      </div>

      {/* Step 5: operations review */}
      <div className={`absolute top-[260px] left-[120px] flex items-center gap-3 ${isVisible ? 'step-5' : ''}`}>
        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
        <div className="bg-purple-50 rounded-lg px-4 py-2.5 workflow-step border border-purple-100">
          <p className="text-xs font-normal text-gray-700 lowercase">operations review</p>
        </div>
      </div>

      {/* Completion Stamp */}
      <div className={`absolute top-[255px] right-[40px] flex flex-col items-center gap-2 ${isVisible ? 'completion' : ''}`}>
        <div className={`relative w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg ${isVisible ? 'completion-glow' : ''}`}>
          <svg className={`w-7 h-7 text-emerald-500 ${isVisible ? 'completion-check' : ''}`} fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
          </svg>
        </div>
        <div className="text-center">
          <p className="text-xs font-semibold text-gray-700 lowercase">workflow completed</p>
          <p className="text-[10px] font-normal text-gray-500 lowercase mt-0.5">all steps approved</p>
        </div>
      </div>

      {/* Add Step Ghost Card */}
      <div className={`absolute top-[340px] left-[220px] ${isVisible ? 'add-step' : ''}`}>
        <div className="bg-white/40 backdrop-blur-sm border border-gray-200/60 rounded-lg px-3 py-1.5 flex items-center gap-2 hover:border-gray-300 transition-all cursor-pointer">
          <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <span className="text-xs text-gray-500 font-normal lowercase">add step</span>
        </div>
      </div>

      {/* Caption */}
      <div className={`absolute bottom-16 right-8 ${isVisible ? 'caption' : ''}`}>
        <p className="text-[15px] text-[#444] font-medium lowercase tracking-wide">flexible multi-step workflows</p>
      </div>
    </div>
  );
};

export default WorkflowDiagram;
