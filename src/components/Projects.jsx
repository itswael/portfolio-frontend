import Project from "./project.jsx";

const StackingCards = () => {
    // const [cards] = useState([ // Removed auto-scroll card generation for clarity
    //     {
    //         id: 1,
    //         title: "Short CV",
    //         content: "With a strategic brand and digital product development background...",
    //         linkText: "Find regular updates on LinkedIn",
    //         buttonText: "Linkedin CV"
    //     },
    //     {
    //         id: 2,
    //         title: "Experience 2",
    //         content: "Additional professional details...",
    //         linkText: "More on LinkedIn",
    //         buttonText: "View Details"
    //     }
    // ]);

    return (
        <div>
            <Project/>
            <Project/>
            <Project/>
        </div>

    )
};

export default StackingCards;