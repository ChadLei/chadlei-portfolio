// import {graphql, useStaticQuery} from 'gatsby'
//
// const useInstagram = () => {
//     // Fields to sort by:
//     // id
//     // likes
//     // comments
//     // mediaType
//     // preview
//     // timestamp
//     // caption
//     const data = useStaticQuery(graphql`
//     query {
//         allInstaNode(limit:6, sort: { fields: timestamp, order: DESC }) {
//          nodes {
//            id
//            username
//            caption
//            localFile {
//              childImageSharp{
//                fluid(quality: 50) {
//                  ...GatsbyImageSharpFluid_withWebp
//                }
//              }
//            }
//          }
//        }
//        }
//     `)
//
//     return data.allInstaNode.nodes.map(node => ({
//         ...node.localFile.childImageSharp,
//         id: node.id,
//         caption: node.caption,
//         username: node.username
//     }))
// }
//
// export default useInstagram
