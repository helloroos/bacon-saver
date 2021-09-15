// filterForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   let excludeQuery = e.target.querySelector('.excludeQuery').value;
//   let type = e.target.querySelector('.type').value;
//   let diet = [];
//   for (const checkbox of e.target.querySelectorAll('input[name=diets]')) {
//     if (checkbox.checked) {
//       diet.push(checkbox.value);
//     }
//   }
//   // searchQuery = 'cilantro' // TO BE REMOVED
//   fetchFilteredSearchResults(searchQuery, excludeQuery, type, diet);
// })

// // SECOND GET REQUEST
// export async function fetchFilteredSearchResults(searchQuery, excludeQuery, type, diet) {
//   axios({
//     method: 'GET',
//     url: `/recipes/${searchQuery}/filter`,
//     params: {
//       excludeQuery: excludeQuery,
//       type: type,
//       diet: diet
//     }
//   })
//     .then(res => {
//       generateHTML(res.data.results)
//     })
//     .catch(err => console.log(err))}