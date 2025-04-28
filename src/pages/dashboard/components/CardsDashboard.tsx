import CardDashboard, { PropsCardDashboard } from "./CardDashboard"

interface PropsCardsDashboard {
    content:PropsCardDashboard[]
}

const CardsDashboard = ({content}:PropsCardsDashboard) => {
    return (
        <>
            {content.map((item)=> <CardDashboard key={item.title} title={item.title}content={item.content}/>)}
        </>
    )
}

export default CardsDashboard