// import { RootState } from '@/store/store'
import React, { useMemo, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover'
import { Button } from '../../ui/button'
import { CropIcon } from 'lucide-react'

// import { addLayer, setActiveLayer, setGenerating } from '@/features/layerSlice'
import { apiClient } from '@/lib/api-client'
import { Label } from '../../ui/label'
import { Input } from '../../ui/input'
import useLayerStore from '@/store/layerStore'
import { toast } from 'sonner'

export default function GenFill() {
    // const dispatch = useDispatch()
    // const generating = useSelector((state: RootState) => state.image.generating)
    // const activeLayer = useSelector((state: RootState) => state.image.activeLayer)
    const { generating, activeLayer, addLayer, setActiveLayer, setGenerating } = useLayerStore()
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)




    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button disabled={generating} variant={"outline"} className='p-8'>
                    <span className='flex gap-1 items-center justify-center flex-col text-xs font-medium'>
                        Generative Fill <CropIcon size={20} />
                    </span>
                </Button>
            </PopoverTrigger>
            <PopoverContent className='w-full'>
                <div className='flex flex-col h-full'>
                    <div className='my-2'>
                        <h3>Generative Fill</h3>
                        <p className='text-sm text-muted-foreground'>
                            Modify width and height of an image with AI Generated content.
                        </p>
                    </div>

                    {activeLayer.width && activeLayer.height ? (
                        <div className='my-4 flex justify-evenly'>
                            <div className="flex flex-col items-center">
                                <span className='text-xs'>Current Size:</span>
                                <p className='text-sm text-primary font-bold'>{activeLayer.width} x {activeLayer.height}</p>
                            </div>

                            <div className="flex flex-col items-center">
                                <span className='text-xs'>New Size</span>
                                <p className='text-sm text-primary font-bold'>{activeLayer.width + width} x {activeLayer.height + height}</p>
                            </div>
                        </div>
                    ) : null}
                </div>
                <div className="flex gap-2 items-center justify-center">
                    <div className='text-center'>
                        <Label htmlFor='width'>Modify width</Label>
                        <Input
                            name='width'
                            type='range'
                            max={activeLayer.width}
                            value={width}
                            onChange={(e) => setWidth(parseInt(e.target.value))}
                            className='h-8'
                        />
                    </div>

                    <div className='text-center'>
                        <Label htmlFor='height'>Modify height</Label>
                        <Input
                            name='height'
                            type='range'
                            max={activeLayer.height}
                            min={String(-activeLayer.height! + 100)}
                            value={height}
                            onChange={(e) => setHeight(parseInt(e.target.value))}
                            className='h-8'
                        />
                    </div>
                </div>

                <Button
                    disabled={!activeLayer?.url || generating}
                    onClick={async () => {
                        const newLayerId = crypto.randomUUID()
                        setGenerating(true)
                        try {
                            const res = await apiClient.genFill({
                                imgUrl: activeLayer.url!,
                                aspect: "1:1",
                                width: activeLayer.width! + width,
                                height: activeLayer.height! + height
                            })
                            console.log(res)
                            // return
                            if (res?.data?.success) {
                                setGenerating(false)
                                addLayer({
                                    id: newLayerId,
                                    url: res?.data.getFillUrl,
                                    format: activeLayer.format,
                                    height: activeLayer.height! + height,
                                    width: activeLayer.width! + width,
                                    name: "gen_fill" + activeLayer.name,
                                    public_id: activeLayer.public_id,
                                    resourceType: "image"

                                })
                                setActiveLayer(newLayerId)
                                toast.success(res.data?.message || "Image processed successfully.")

                            }

                            if (res?.data?.error) {
                                setGenerating(false)
                            }
                        } catch (error) {
                            console.log(error)
                        } finally {
                            setGenerating(false)

                        }

                    }} className='w-full mt-4'>
                    {generating ? "Generating..." : "Generative Fill"}

                </Button>
            </PopoverContent>
        </Popover>
    )
}
