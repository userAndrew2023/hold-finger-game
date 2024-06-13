const mockLevels: MockLevel[] = [
    {
        name: "Bronze",
        color: "#cd7f32",
        coins_from: 1
    },
    {
        name: "Sliver",
        color: "#c0c0c0",
        coins_from: 1000
    },
    {
        name: "Gold",
        color: "#ffd700",
        coins_from: 10000
    },
    {
        name: "Platinum",
        color: "#E5E4E2",
        coins_from: 1000000
    },
    {
        name: "Diamond",
        color: "#B9F2FF",
        coins_from: 10000000
    },
    {
        name: "Ruby",
        color: "#d10056",
        coins_from: 100000000
    }
]

type MockLevel = {
    name: string,
    color: string,
    coins_from: number,
}

export default mockLevels;