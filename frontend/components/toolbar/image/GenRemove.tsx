import React, { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover'
import { Button } from '../../ui/button'
import { Eraser } from 'lucide-react'
import { Label } from '../../ui/label'
import { Input } from "../../ui/input"
import { apiClient } from '@/lib/api-client'
import useLayerStore from '@/store/layerStore'
import { toast } from 'sonner'

export default function GenRemove() {
    const { generating, activeLayer, addLayer, setGenerating, setActiveLayer } = useLayerStore()
    const [activeTag, setActiveTag] = useState("")
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button disabled={generating} variant={"outline"} className='p-8'>
                    <span className='flex gap-1 items-center justify-center flex-col text-xs font-medium'>
                        Content Aware <Eraser size={20} />
                    </span>
                </Button>
            </PopoverTrigger>
            <PopoverContent className='w-full'>
                <div>
                    <h3>Smart AI Remove</h3>
                    <p className='text-sm text-muted-foreground'>
                        Generative Remove any part of the image
                    </p>
                </div>
                <div className='grid grid-cols-3 items-center gap-4'>
                    <Label htmlFor="name">Selection</Label>
                    <Input className="col-span-2 h-8" value={activeTag} onChange={(e) => setActiveTag(e.target.value)} />

                </div>
                <Button onClick={async () => {
                    const newLayerId = crypto.randomUUID()
                    setGenerating(true)
                    // const res = await genRemoval({
                    //     prompt: activeTag,
                    //     activeImage: activeLayer.url!
                    // })

                    const res = await apiClient.genRemove({ prompt: activeTag, imgUrl: activeLayer.url! })
                    console.log(res)
                    if (res?.data?.success) {
                        setGenerating(false)
                        addLayer({
                            id: newLayerId,
                            url: res?.data.removeUrl,
                            format: activeLayer.format,
                            height: activeLayer.height,
                            width: activeLayer.width,
                            name: "gen_removed" + activeLayer.name,
                            public_id: activeLayer.public_id,
                            resourceType: "image"

                        })
                        setActiveLayer(newLayerId)
                        toast.success(res.data?.message || "Image processed successfully.")

                    }

                    if (res?.data?.error) {
                        setGenerating(false)
                    }

                }} className='w-full mt-4'>
                    Magic Remove

                </Button>
            </PopoverContent>
        </Popover>
    )
}
