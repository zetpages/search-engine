function filterPropComplex(arr) {
    let optionsComplex = [];
    let condNew = false;


    for (let i = 0; i < type.length; i++) {
        if (type[i].getAttribute('aria-selected') === 'true' && type[i].getAttribute('data-value') == 'new') {
            condNew = true;
            console.log(condNew);
            optionsComplex = document.getElementById('complex').selectedOptions;
        }
    }

    let complexValues = Array.from(optionsComplex).map(({ value }) => value);
    complexValues.shift();
    console.log(complexValues);

    let tempFilteredPropComplex = [];
    let filteredPropComplex = [];

    if (condNew && complexValues.length > 0) {
        console.log("if (condNew && complexValues.length > 0)");
        tempFilteredPropComplex = arr.filter((el) => {
            for (let i = 0; i < complexValues.length; i++) {
                if (el.complex == complexValues[i]) {
                    console.log("found " + el.complex + " == " + complexValues[i]);
                    return true;
                }
            }
        });
        filteredPropComplex = filterPropRegionAndStreet(tempFilteredPropComplex);
        // filteredPropComplex = filterPropPrice(tempFilteredPropComplex);
        console.log(filteredPropComplex);
    } else {
        console.log("else else else else");
        filteredPropComplex = filterPropRegionAndStreet(propers);
    }

    return filteredPropComplex;
}