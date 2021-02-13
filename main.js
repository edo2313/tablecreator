function createTable(){
    lines = document.getElementById('input').value.split('\n');
    var output = '<table style="width:100%; font-weight: 700; text-align: center;">\n'
    var column = 1;
    lines.forEach(value => {
        if(column == 1)
            output += "\t<tr>\n";
        let link = value.toLowerCase().split(' ').join('-');
        let name = value.split(' ');
        name.push(name.pop().toUpperCase());
        name = name.join(' ');
        output += '\t\t<td><a target="_blank" href="http://medyapro.it/'+link+'">'+name+'</a></td>\n';
        column++;
        if( column > 4) {
            output += '\t</tr>\n';
            column = 1;
        }
    });
    if(column !=1 )
        output += '\t</tr>\n';
    output += '</table>';
    document.getElementById('output').value = output;
}