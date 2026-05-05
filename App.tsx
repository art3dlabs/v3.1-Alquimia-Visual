
import React from 'react';
import AiStudioView from './components/AiStudioView';

export type ImageStatus = 'done' | 'pending' | 'error' | 'idle';

export interface GeneratedMedia {
    status: ImageStatus;
    mediaUrl: string;
    sourceCaption: string;
    generationData: any;
    promptUsed?: string;
    needsEnhancement?: boolean;
    styleAnalysis?: any;
}

const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <AiStudioView 
        uploadedImage={''}
        onSourceImageChange={() => {}}
        onSwitchToCollage={() => {}}
        allGeneratedMedia={[]}
        setAllGeneratedMedia={() => {}}
        generationStats={{ attempts: 0, successes: 0 }}
        setGenerationStats={() => {}}
        preselectedEffect={null}
        setPreselectedEffect={() => {}}
        onOpenPreview={() => {}}
        onSetAsReference={() => {}}
      />
    </div>
  );
};

export default App;
