banner = (x) => {
    console.log(`##### Challenges ${x}#####`)
}


banner(1)

num1 = (str) => {
    for (let i = 0 ; i < str.length ; i++)
        if (str[i] === 'a'|| 
            str[i] === 'e'|| 
            str[i] === 'i'||
            str[i] === 'o'|| 
            str[i] === 'u') console.log(str[i])

}
        num1 ("Regular expressions are for term 2.")

 banner(2)

num2 = (str) => {
    let vCount = 0
    for (let i = 0 ; i < str.length ; i++)
        if (str[i] === 'a' && vCount < 5|| 
            str[i] === 'e' && vCount < 5|| 
            str[i] === 'i' && vCount < 5||
            str[i] === 'o' && vCount < 5|| 
            str[i] === 'u' && vCount < 5){
            vCount++
            console.log(str[i])
}
}
         num2 ("Regular expressions are for term 2.")

         banner(3)

         num3 = (str) => {
             let count = 2
             for (let i = 0 ; i <str.length ; i++)
             if (i === count) {
             console.log(str[i])
             count += 3
             }  
         }
         num3 ("I am the alfalfa and the omelette.")

         banner (4)
         
         num4 = (str , index) => {
            let count = 0
            for (let i = 0 ; i <str.length ; i++,count ++)
                if (count < 4 && str[i+index]!== undefined) console.log(str[i+index]) 
        }
        
        num4 ("Oh hi, I didn't see you there. Welcome.", 4)
        
         num4 ("Oh hi, I didn't see you there. Welcome.", 36)



         banner (5)
         

         num5 = (str) => {
        
            for (let i = 0 ; i <str.length ; i++)
                if (str[i]=== 'u') console.log(i) 
        }
        

         num5 ('You picked the wrong house, bub.')


         banner (6)
         
         num6 = (str , index) => {
            let count = 0
            for (let i = 0 ; i <str.length ; i++)
                if (str[i]=== 'u' && count <1){
                    count++
                    console.log(i) 
        }
    }
        num6 ('You picked the wrong house, bub.')


        banner (7)
        num7 = (str , index) => {
            let count = 0
            for (let i = 0 ; i <str.length ; i++)
                if (str[i]=== 'u' && count <1){
                    count++
                    console.log(i)
                }if (count === 0 ) console.log(-1)
                
        
    }
        num7 ('You picked the wrong house, bub.')

        num7 ("I'm Canadian.")
