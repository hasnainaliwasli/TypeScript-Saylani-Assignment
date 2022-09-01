/* Write a ts program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
                                      Percentage >= 90% : Grade A 
                                      Percentage >= 80% : Grade B                                      
                                      Percentage >= 70% : Grade C 
                                      Percentage >= 60% : Grade D 
                                      Percentage >= 40% : Grade E 
                                      Percentage <  40% : Grade F                     */
                                      

                                      var userInput1:string|null = prompt(`Enter Physics Mraks: `);     
                                      var physics:number = Number(userInput1);

                                      var userInput2:string|null = prompt(`Enter Chemistry Mraks: `);     
                                      var chemistry:number = Number(userInput2);

                                      var userInput3:string|null = prompt(`Enter Biology Mraks: `);     
                                      var biology:number = Number(userInput3);

                                      var userInput4:string|null = prompt(`Enter Mathematics Mraks: `);     
                                      var math:number = Number(userInput4);

                                      var userInput5:string|null = prompt(`Enter Computer Mraks: `);     
                                      var computer:number = Number(userInput5);

                                      var userInput6:string|null = prompt(`Enter sum of All subjects's Marks : `);
                                      var totalMarks:number = Number(userInput6);

                                      var totalObtainMarks:number = physics+chemistry+biology+math+computer;

                                      var percent:number =(totalObtainMarks/totalMarks)*100;

                                      if(percent >= 90)
                                      {
                                        console.log(`Grade A`);
                                        
                                      }
                                      else if(percent>= 80){ 

                                        console.log(` Grade B`);
                                          
                                      }
                                      else if(percent>= 70){
                                        console.log(`Grade C`);
                                        
                                      }
                                      else if(percent >= 60){
                                        console.log(`Grade D`);

                                      }
                                      else if(percent >= 40){
                                        console.log(`Grade E`);
                                        
                                      }
                                      else{
                                        console.log(`Grade F`);
                                        
                                      }