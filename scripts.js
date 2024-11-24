// scripts.js

$(document).ready(function() {
    // Sort Integer Array
    $('#sortIntegers').click(function() {
        const input = $('#integerArray').val();
        const array = input.split(',').map(Number).filter(n => !isNaN(n));
        
        if (array.length === 0) {
            $('#integerResult').html('<p class="text-danger">Please enter valid integers.</p>');
            return;
        }

        const sortedArray = array.sort((a, b) => a - b);
        $('#integerResult').html(`<p>Sorted Integers: ${sortedArray.join(', ')}</p>`);
    });

    // Search Integer in Array
    $('#searchInteger').click(function() {
        const input = $('#integerArray').val();
        const array = input.split(',').map(Number).filter(n => !isNaN(n));
        
        const searchValue = prompt("Enter the integer to search:");
        
        if (searchValue !== null) {
            const num = Number(searchValue);
            const found = array.includes(num);
            if (found) {
                $('#integerResult').append(`<p>${num} is found in the array.</p>`);
            } else {
                $('#integerResult').append(`<p>${num} is not found in the array.</p>`);
            }
        }
    });

    // Sort Named Entities
    $('#sortEntities').click(function() {
        const input = $('#namedEntities').val();
        
        try {
            const entities = JSON.parse(input);
            const sortedKeys = Object.keys(entities).sort();
            let resultHtml = '<ul>';
            
            sortedKeys.forEach(key => {
                resultHtml += `<li>${key}: ${entities[key]}</li>`;
            });
            
            resultHtml += '</ul>';
            $('#entityResult').html(resultHtml);
        } catch (error) {
            $('#entityResult').html('<p class="text-danger">Invalid JSON format.</p>');
        }
    });
});