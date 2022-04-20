
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){

  const date = document.querySelector('#date').value

  fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=hoWVirUfGcRBrn1si6ZBzrQxaIxnyJ48m313kef5
  `)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('.display-results').classList.toggle('hidden')
        const name = data.near_earth_objects[date][0].name
        const diameter = data.near_earth_objects[date][0].estimated_diameter.miles.estimated_diameter_max
        const danger = data.near_earth_objects[date][0].is_potentially_hazardous_asteroid
        document.querySelector('#result').innerText = `Name:  ${name} 
        Esimated Diamater:  ${diameter} miles
        Dangerous?  ${danger ? 'Yah' : 'Naaah'}`

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


