import {graphql, useStaticQuery} from 'gatsby'

const useInstagram = () => {
    const data = useStaticQuery(graphql`
    query {
        allInstaNode(limit:6, sort: { fields: mediaType, order: DESC }) {
         nodes {
           id
           username
           caption
           localFile {
             childImageSharp{
               fluid(quality: 100) {
                 ...GatsbyImageSharpFluid_withWebp
               }
             }
           }
         }
       }
       }
    `)

    return data.allInstaNode.nodes.map(node => ({
        ...node.localFile.childImageSharp,
        id: node.id,
        caption: node.caption,
        username: node.username
    }))
}

export default useInstagram
