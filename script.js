// Fetch data from reqres API
url = 'https://reqres.in/api/users?page=1'
fetch( url )
    .then( res => res.json() )
    .then( res => {
        records = res[ 'data' ]
        console.log( records[ 0 ][ 'avatar' ] );
        output = ''
        for ( i = 0; i < records.length; i++ ) {
            output += `
            <div class="col m-2 mx-4 border border-dark shadow-sm rounded" style="background:black;">
                <div class="card align-middle text-center m-auto my-4 border-0" style="width: 18rem; background:grey; color:white;">
                    <img src="${ records[ i ][ 'avatar' ] }" class="card-img-top rounded-circle m-auto mt-3 shadow w-50" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${ records[ i ][ 'id' ] }</h5>
                        <h5 class="card-title">${ records[ i ][ 'first_name' ] } ${ records[ i ][ 'last_name' ] }</h5>
                        <p class="card-text">
                            ${ records[ i ][ 'email' ] }
                        </p>
                        <button class='btn btn-outline-info'>Show Details</button>
                    </div>
                </div>
            </div>`;
        }
        document.getElementById( "userRow" ).innerHTML = output;
    } );