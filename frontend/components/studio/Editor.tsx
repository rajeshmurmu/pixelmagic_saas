'use client'

import React from 'react'
import ActiveImage from './ActiveImage'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import ToolBar from './ToolBar'
import LoadingScreen from './LoadingScreen'
import useLayerStore from '@/store/layerStore'
import UploadForm from '../upload/UploadForm'
import { ThemeToggle } from '../theme-toggle'
import Layers from '../layers/Layers'

export default function Editor() {
    // const generating = useSelector((state: RootState) => state.image.generating)
    const { generating } = useLayerStore()
    return (
        <div className='flex h-full w-full'>
            <Card className='px-4 py-3 basis-[240px] shrink-0 rounded-none' >

                <CardHeader>
                    <div className="text-center">
                        <ThemeToggle />
                    </div>

                </CardHeader>

                <CardContent>
                    <div className='flex flex-col gap-4'>
                        {/* {activeLayer.resourceType === "image" ? <ToolBar /> : null} */}
                        <ToolBar />
                    </div>
                </CardContent>
            </Card>
            <UploadForm />
            {generating && (
                <LoadingScreen />
            )}
            <ActiveImage />
            <div className="h-screen">
                <Layers />
            </div>
        </div>
    )
}
