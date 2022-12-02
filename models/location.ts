export interface Location {
    id: string
    name: string
    description: string
    website: string
    images: string[]
    rating: number
    address: string
    city: string
}

export function locationFactory(id: string = ""): Location {
    return {
        id,
        images: ["/images/location-fallback.jpg"],
        address: "n/a",
        city: "n/a",
        description: "n/a",
        name: "n/a",
        rating: 0,
        website: ""
    }
}
