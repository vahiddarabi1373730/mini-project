export function   translateEducation(education:string):string{
  let result=""
  switch (education){
    case 'diploma':
      result= 'دیپلم'
      break ;
    case 'master':
      result= 'کارشناسی'
      break
    case 'senior':
      result=  'ارشد'
      break
    case 'doctorate':
      result=  'دکترا'
      break
    default:"empty"
  }
  return  result
}
