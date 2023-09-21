const lista = [];
lista.push(new Producto("Tanqueray", "Charles Tanqueray & Co", 10500));
lista.push(new Producto("Beefeater", "James Burrough", 9300));
lista.push(new Producto("Bombay Sapphire", "Bombay Spirits Co. Ltd.", 13000));
lista.push(new Producto("Broker's", "Broker's Gin Ltd.", 18000));
lista.push(new Producto("Martin Miller's", "The Reformed Spirits Company", 12540));
lista.push(new Producto("Gordon's", "Diageo", 16999));
lista.push(new Producto("Seagram's", "Calvert", 21000));
lista.push(new Producto("Larois", "Beam Suntory", 33000));


function mostrarProductos(mensaje,lista,total,mostrar) {
    const misProductos = lista.map((productos) =>  (`${productos.nombre} ${productos.precio}`));
    if(mostrar)
        alert(`${mensaje}:\n${misProductos.join("\n")}\nTotal: $${total}`)
    else
        alert(`${mensaje}:\n${misProductos.join("\n")}`)

}