module.exports = function check(str, bracketsConfig) {
    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];

        for (let j = 0; j < bracketsConfig.length; j++){
            if(bracketsConfig[j][1] === currentChar){
                if(bracketsConfig[j][0] === bracketsConfig[j][1]){
                    if(str[i-1] === str[i]){
                        str = remove_character(str, i);
                        str = remove_character(str, i-1);
                        i= i-2
                    }
                } else {
                    if(str[i-1] === bracketsConfig[j][0]){
                        str = remove_character(str, i);
                        str = remove_character(str, i-1);
                        i= i-2
                    } else {
                        return false;
                    }
                }
                break;
            }
        }
    }

    return str.length === 0;
};

function remove_character(str, char_pos)
{
    part1 = str.substring(0, char_pos);
    part2 = str.substring(char_pos + 1, str.length);
    return (part1 + part2);
}

