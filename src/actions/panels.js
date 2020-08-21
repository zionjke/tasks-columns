// export default {
//     addPanel: name => ({
//         type:'PANELS:ADD',
//         payload:name
//     })
// }

export const panelActions = {
    addPanel: (name) => ({type:'PANELS:ADD',payload:name}),
    deletePanel:(index) => ({type:'PANELS:DELETE',payload:index})
};