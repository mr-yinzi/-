//过滤时间
export const filterTime=time=>{
    let date=new Date(time)
    let month=(date.getMonth()+1+"").padStart(2,"0")
    let day=(date.getDate()+"").padStart(2,"0")
    return `${month}月${day}日`
}