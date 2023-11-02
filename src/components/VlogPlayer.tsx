'use client'
import { Play } from "next/font/google"
import { useEffect, useRef } from "react"
import { useWindowListener } from "@/hooks/useWindowListener"

export function VlogPlayer({vdoSrc, isPlaying} : {vdoSrc:string, isPlaying:boolean }) {

    const vdoRef = useRef<HTMLVideoElement>(null)
    useEffect(()=>{
        if (isPlaying){
            vdoRef.current?.play()
        } else {
            vdoRef.current?.pause()
        }
    }, [isPlaying])

    //useWindowListener("resize", (e)=>{ alert('Width is ' + (e.target as Window).innerWidth)})
    
    return (
        <video className="w-[40%]" src={vdoSrc} ref={vdoRef} controls loop muted />
    )
}