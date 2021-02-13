function createTable(){
    lines = document.getElementById('input').value.split('\n');
    var output = '<table style="width:100%; font-weight: 700; text-align: center;">'
    var column = 1;
    lines.forEach(value => {
        if(column == 1)
            output += "<tr>";
        let link = value.toLowerCase().split(' ').join('-');
        value = value.split('');
        let name =  value.push(value.pop().toUpperCase()).join(' ');
        output += '<td><a target="_blank" href="http://medyapro.it/'+link+'">'+name+'</a></td>';
        column++;
        if( column > 4) {
            output += '</tr>';
            column == 1;
        }
    });
    if(column !=1 )
        output += '</tr>';
    output += '</table>';
    document.getElementById('output').value = output;
}