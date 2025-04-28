import { TableHead } from "./ui/table"

export interface head {
    head: string[]
    cell: boolean
}


const TableHeads = ({head,cell}:head) =>
{
    return (
        <>
            {head.map((item)=><TableHead className="text-center">{item}</TableHead>)}
            {cell&&<TableHead></TableHead>}
        </>
    )
}
export default TableHeads