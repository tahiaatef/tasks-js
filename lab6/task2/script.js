$(document).ready(function() {
   
    $('#getAllUsers').click(function() {
     
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users', 
            method: 'GET', 
            success: function(data) {
                let tableBody = ''; 

                data.forEach(user => {
                    
                    tableBody += `<tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td><a href="#" class="viewDetails" data-id="${user.id}">View Details</a></td>
                    </tr>`;
                });

            
                $('#userTable tbody').html(tableBody);
            },
            error: function() {
                alert("error");
            }
        });
    })
    $(document).on('click', '.viewDetails', function() {let userId = $(this).data('id'); 
        $.ajax({
            url:` https://jsonplaceholder.typicode.com/users/${userId}`, 
            method: 'GET',
            success: function(user) {
                
                $('#detailName').text(user.name);
                $('#detailEmail').text(user.email);
                $('#detailWebsite').text(user.website);
                $('#detailAddress').text(`${user.address.street}, ${user.address.city}`);
                $('#userDetails').show(); 
            },
            error: function() {
                alert("error");
            }
        });
    });
});