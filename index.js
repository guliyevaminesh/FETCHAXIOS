const contactname = document.getElementById('contactname')

// fetch('https://northwind.vercel.app/api/customers')
// .then(res => res.json())
// .then(data => {
//     data.forEach( item =>  {
//         const p = document.createElement('p')
//         p.textContent = `${item.contactName}`
//         contactname.appendChild(p)
//     })
// })

// const sendbutton = document.getElementById('sendbutton')
// sendbutton.addEventListener('click',function(){
//     fetch('https://northwind.vercel.app/api/customers',{
//                   method: "POST",
//                   headers: {
//                     "Content-Type": "application/json",
//                   },
//                   body: JSON.stringify({
//                     Companyname: companyname.value,
//                     Contactname: contactname.value,
//                     Contacttitle: contacttitle.value
//                    }),
//                 })
//                   .then((res) => res.json())
//                   .then((data) => {
//                     console.log("customer created" + data);
//                   });
//         })

// sendbutton.addEventListener('click',function(){
//     const companyname = document.getElementById('companyname').value;
//     let url = `https://northwind.vercel.app/api/customers${companyname}`;

//         fetch(url, {
//           method: "DELETE",
//         }).then((res) => console.log(res))
// })
// fetch('https://northwind.vercel.app/api/customers', {
//     method: 'PUT',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ /* Updated resource data */ })
// })

// axios.get("https://northwind.vercel.app/api/customers")
// .then((res) => {
//       console.log(res.data);
//     });

// sendbutton.addEventListener('click',function(){
//     axios.post("https://northwind.vercel.app/api/customers", {
//             Companyname: companyname.value,
//             Contacttitle: contacttitle.value
//         }).then(res => {
//                 console.log(res);
//             })
// })
// sendbutton.addEventListener('click',function(){
//     axios.delete(`https://northwind.vercel.app/api/customers${companyname.value}`)
// })

