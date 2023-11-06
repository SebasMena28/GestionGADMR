import {Flex} from "@chakra-ui/react"
import Docs from "./Docs"

const ListDocs = ({docs}) => {
    //console.log(docs)
    return (
        <>
            <Flex>
                {docs.length === 0 && <p>No hay archivos</p>}
                {docs.map(doc =>(<Docs key={doc.id} {...doc}/>))}
            </Flex>
        </>
    )
}

export default ListDocs 