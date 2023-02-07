type TaskText = {
    text: string,
    isBold: boolean
}

export interface ITasks {
    day: number,
    title: string,
    content: TaskText[],
}

export const tasksEn: ITasks[] = [
    {
        day: 1,
        title: "A glass of warm water in the morning",
        content: [
            {
                text: "Everything is simple, it is the main component of our body. You can talk about the benefits of water forever.",
                isBold: false
            },
            {
                text: "What is the benefit of a glass of cool water in the morning?",
                isBold: true
            },
            {
                text: "Water helps to awaken the body, increase elevation (promotes weight loss), and also has a good effect on the skin.",
                isBold: false
            },
            {
                text: "❗️Important:",
                isBold: true
            },
            {
                text: "You need to drink water within the next 10 minutes after waking up, on an empty stomach.",
                isBold: false
            },
        ],
    },
    {
        day: 2,
        title: "Clean up a room.",
        content: [
            {
                text: "Clean room = clean mind.",
                isBold: false
            },
            {
                text: "At first glance, it may seem that this is some kind of nonsense. However, scientists conducted an experiment: They examined the school desks of students. It turned out that students who have all school supplies scattered in a chaotic manner around the desk are 20-30% behind other students in academic performance.",
                isBold: false
            },
        ],
    },
    {
        day: 3,
        title: "Cold shower",
        content: [
            {
                text: "One can argue forever about the ways of taking a shower. I will talk about what I do myself. I take cold showers.",
                isBold: false
            },
            {
                text: "Why is it cold? And why is it necessary",
                isBold: true
            },
            {
                text: "You may have seen that cold showers increase testosterone, but this is all nonsense. I will talk more about testosterone later.",
                isBold: false
            },
            {
                text: "So why am I taking a cold shower then? Everything is simple. For the prevention of the body and in order to cheer up in the morning (a cold shower gives a big boost of energy for the whole day)",
                isBold: false
            },
            {
                text: "Until the age of 16, I often had a cold. As soon as I went outside without a hat, the next day I had a fever. The doctor told me that you can try hardening, namely: take a cold shower every day. That's all, after half a year I completely forgot about the diseases. And as a bonus, my productivity has increased.",
                isBold: false
            },
            {
                text: "❗️Important:",
                isBold: true
            },
            {
                text: "Cold water is not to open the tap to the maximum and stand under ice water. No, you should start gradually, first the water temperature should be at room temperature, then lower, lower ... etc.",
                isBold: false
            },
        ],
    },
]