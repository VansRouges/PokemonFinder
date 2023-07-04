"use client"
import Image from "next/image"

export function PokemonImage({ image, name }: { image: string, name: string }){
    return(
        <Image
            src={image}
            alt={"Picture of" + name}
            className="pt-6 transition-opacity opacity-0 duration-[2s]"
            priority
            fill
            style={{"objectFit": "contain"}}
            onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
    )
}