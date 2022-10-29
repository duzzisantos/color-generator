    function myColorGenerator(){
        let r = Math.floor(Math.random() * 255)
        let g = Math.floor(Math.random() * 255)
        let b = Math.floor(Math.random() * 255)

        return (`rgb(${r}, ${g}, ${b})`)
    }

    myColorGenerator()

    export const data = [
        {
            id: 1,
            color: myColorGenerator()
        },
        {
            id: 2,
            color: myColorGenerator()
        },
        {
            id: 3,
            color: myColorGenerator()
        },
        {
            id: 4,
            color: myColorGenerator()
        }
    ]