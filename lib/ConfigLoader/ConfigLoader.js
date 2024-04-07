export function LoadConfig(){
    let viteValues = TryLoadVite();
    return [...viteValues]
}
export function GetDebugLevel(){
    let variables = LoadConfig();
    for(let entry of variables){
        console.log(entry);
        if(entry['LOG_LEVEL']){
            return entry['LOG_LEVEL'];
        }
    }
    return null;
}
function TryLoadVite(){
    let variables = [];
    for(let variable in import.meta.env){
        let value = import.meta.env[variable];
        if(variable.includes('VITE_')){
            variable = variable.replace('VITE_','');
        }
        variables.push({[variable]:value})
    }
    return variables;
}
function TryLoadCRA(){

}