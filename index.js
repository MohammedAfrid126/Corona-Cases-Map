function updateMap() {

    fetch("./data.json")
        .then(response=>response.json())
        .then(resp=>{
            resp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;
                cases = element.infected;

                if (cases > 250){
                    color = "rbg(255,0,0)";
                }
                else{
                    color = `rgb(${cases},0,0)`;
                }


                const marker = new mapboxgl.Marker({
                    color: color
                }).setLngLat([longitude, latitude])
                .addTo(map);
        });
    }).catch((err=>{
        console.log(err);
    }))
}

updateMap();