# File System (FS Module)

FS module directly communicate with OS rather than browser, the common operations on a file or folder are:
1. file -> write , read , append file
2. folder -> mkdir/md , rmdir/rm , readdir
3. file metadata -> stat , lstat , rstat
4. watch ->watch , unwatch
5. stream -> read_stream(), write_stream()

all functions are promise so it must be called with awake keyword

# CRUD operation
C= create
R= Retrieve
U=update
D=delete

assume we are making a cart related project
1. user can add any product (id , name , price , qty) into cart
2. user can see all the items of cart
3. user can remove item from cart
4. user can also update quantity of product
5. all the items should be stored after termination of project
