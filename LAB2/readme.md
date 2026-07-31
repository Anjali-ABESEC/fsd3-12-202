# File System (FS Module)

FS module directly communicate with OS rather than browser, the common operations on a file or folder are:
1. file -> write , read , append file
2. folder -> mkdir/md , rmdir/rm , readdir
3. file metadata -> stat , lstat , rstat
4. watch ->watch , unwatch
5. stream -> read_stream(), write_stream()

all functions are promise so it must be called with awake keyword