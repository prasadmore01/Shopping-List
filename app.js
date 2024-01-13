  
        let arr=[]
        let str=''
        
        let addBtn = document.querySelector('#addBtn');
        addBtn.addEventListener('click',addFun,false)
        
        let show = document.querySelector('ol')
        show.addEventListener('click',funClick,false)

        let updateBtn = document.querySelector('#updateBtn')
        updateBtn.addEventListener('click',updateFun,false)

        let deleteBtn = document.querySelector('#deleteBtn')
        deleteBtn.addEventListener('click',deleteFun,false)

        let table = document.querySelector('#table')
        let tableStr=''

      


        function Products(name,price){
            this.name = name;
            this.price = price;
        }

        function addFun(){
            let name = document.getElementById('name').value;
            let price = document.getElementById('price').value;
            
            let obj = new Products(name,price)
            arr.push(obj)
            display()
        }

        function display(){
            str=""

            for(let i=0;i<arr.length;i++){
                str += "<li>"+arr[i].name+" = "+arr[i].price+"</li>"
            }

            show.innerHTML=str

            document.getElementById('name').value='';
            document.getElementById('price').value='';
            
            document.getElementById('name').readOnly=false;

        }

        function funClick(event){
            let data = event.target.textContent;

            let newArr = data.split(' = ')
            console.log(newArr)
            document.getElementById('name').value = newArr[0];
            document.getElementById('price').value = newArr[1];

            document.getElementById('name').readOnly=true;

        }

        function updateFun(){

            let name = document.getElementById('name').value;
            let price = document.getElementById('price').value;
            
            for(let i=0;i<arr.length;i++){
                if(arr[i].name==name){
                    arr[i].price=price;
                }
            }
            
           

            display()

        }

        function deleteFun(){
            let name = document.getElementById('name').value;
            let price = document.getElementById('price').value;
        
            for(let i=0;i<arr.length;i++){
                if(arr[i].name==name && arr[i].price==price){
                    arr.splice(i,1)
                }
            }
           
            display()
        }
   