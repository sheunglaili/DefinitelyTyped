// Type definitions for bumblebee-hotword 0.0.6
// Project: https://github.com/jaxcore/bumblebee-hotword
// Definitions by: sheunglaili <https://github.com/sheunglaili>
// Definitions: https://github.com/DefinitelyTyped/
/// <reference types="node" />

import { EventEmitter } from "events";


export = Bumblebee;

declare class Bumblebee extends EventEmitter {
    constructor();

    setVoiceProcessor(Proc : Bumblebee.VoiceProcessor) : void;
    addHotword(name : string , data? : Uint8Array , sensitivity? : number) : void
    setHotword(w : string) : void
    setSensitivity(s: number): void
    stop() : void
    setWorkersPath(path : string) : void
    detectionCallback(keyword: string) : void
    errorCallback(e : Error ): void
    audioProcessCallback(data : any , sampleRate : any) : void
    audioAnalyserCallback(audioAnalyser: AnalyserNode , gainNode : GainNode): void
    start() : void
    setMuted(muted: boolean) : void
    setMicVolume(vol : number) : void
}

declare namespace Bumblebee { 
    export interface VoiceProcessor {
        start (
            engines : VoiceEngine[],
            volume : number , 
            downsamplerScript : string ,
            errorCallback : (e:Error) => {} ,  
            audioProcessCallback: (data : any) => void,
            audioContextCallback: (analyzer : AnalyserNode , gainNode : GainNode) => void
        ) : void
        stop () : void
    }

    export interface VoiceEngine { 
        processFrame( data : any ) : void;
    }

    export class SpectrumAnalyzer {
        constructor(analyser : AnalyserNode , canvas : HTMLCanvasElement );
        setColors(linecolor: string , bgcolor: string) : void;
        setLineColor(linecolor : string): void;
        setBackgroundColor(bgColor: string):void;
        draw() : void;
        start() : void;
        stop() : void;
        setMuted(muted : boolean) : void
    }
}