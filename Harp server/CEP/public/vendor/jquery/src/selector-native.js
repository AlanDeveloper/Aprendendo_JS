        deleteFile : function(/*Object*/entry) { // @TODO: test deleteFile
            var item = getEntry(entry);
            if (item) {
                _zip.deleteEntry(item.entryName);
            }
        },

        /**
         * Adds a comment to the zip. The zip must be rewritten after adding the comment.
         *
         * @param comment
         */
        addZipComment : function(/*String*/comment) { // @TODO: test addZipComment
            _zip.comment = comment;
        },

        /**
         * Returns the zip comment
         *
         * @return String
         */
        getZipComment : function() {
            return _zip.comment || '';
        },

        /**
         * Adds a comment to a specified zipEntry. The zip must be rewritten after adding the comment
         * The comment cannot exceed 65535 characters in length
         *
         * @param entry
         * @param comment
         */
        addZipEntryComment : function(/*Object*/entry,/*String*/comment) {
            var item = getEntry(entry);
            if (item) {
                item.comment = comment;
            }
        },

        /**
         * Returns the comment of the specified entry
         *
         * @param entry
         * @return String
         */
        getZipEntryComment : function(/*Object*/entry) {
            var item = getEntry(entry);
            if (item) {
                return item.comment || '';
            }
            return ''
        },

        /**
         * Updates the content of an existing entry inside the archive. The zip must be rewritten after updating the content
         *
         * @param entry
         * @param content
         */
        updateFile : function(/*Object*/entry, /*Buffer*/content) {
            var item = getEntry(entry);
            if (item) {
                item.setData(content);
            }
        },

        /**
         * Adds a file from the disk to the archive
         *
         * @param localPath
         */
        addLocalFile : function(/*String*/localPath, /*String*/zipPath, /*String*/zipName) {
             if (fs.existsSync(localPath)) {
                if(zipPath){
                    zipPath=zipPath.split("\\").join("/");
                    if(zipPath.charAt(zipPath.length - 1) != "/"){
                        zipPath += "/";
                    }
                }else{
                    zipPath="";
                }
                 var p = localPath.split("\\").join("/").split("/").pop();
                
                 if(zipName){
                    this.addFile(zipPath+zipName, fs.readFileSync(localPath), "", 0)
                 }else{
                    this.addFile(zipPath+p, fs.readFileSync(localPath), "", 0)
                 }
             } else {
                 throw Utils.Errors.FILE_NOT_FOUND.replace("%s", localPath);
             }
        },

        /**
         * Adds a local directory and all its nested files and directories to the archive
         *
         * @param localPath
         * @param zipPath optional path inside zip
         * @param filter optional RegExp or Function if files match will
         *               be included.
         */
        addLocalFolder : function(/*String*/localPath, /*String*/zipPath, /*RegExp|Function*/filter) {
            if (filter === undefined) {
              filter = function() { return true; };
            } else if (filter instanceof RegExp) {
              filter = function(filter) {
                return function(filename) {
                  return filter.test(filename);
                }
              }(filter);
            }

            if(zipPath){
                zipPath=zipPath.split("\\").join("/");
                if(zipPath.charAt(zipPath.length - 1) != "/"){
                    zipPath += "/";
                }
            }else{
                zipPath="";
            }
			localPath = localPath.split("\\").join("/"); //windows fix
            localPath = pth.normalize(localPath);
            if (localPath.charAt(localPath.length - 1) != "/")
                localPath += "/";

            if (fs.existsSync(localPath)) {

                var items = Utils.findFiles(localPath),
                    self = this;

                if (items.length) {
                    items.forEach(function(path) {
						var p = path.split("\\").join("/").replace( new RegExp(localPath, 'i'), ""); //windows fix
                        if (filter(p)) {
                            if (p.charAt(p.length - 1) !== "/") {
                                self.addFile(zipPath+p, fs.readFileSync(path), "", 0)
                            } else {
                                self.addFile(zipPath+p, new Buffer(0), "", 0)
                            }
                        }
                    });
                }
            } else {
                throw Utils.Errors.FILE_NOT_FOUND.replace("%s", localPath);
            }
        },

        /**
         * Allows you to create a entry (file or directory) in the zip file.
         * If you want to create a directory the entryName must end in / and a null buffer should be provided.
         * Comment and attributes are optional
         *
         * @param entryName
         * @param content
         * @param comment
         * @param attr
         */
        addFile : function(/*String*/entryName, /*Buffer*/content, /*String*/comment, /*Number*/attr) {
            var entry = new ZipEntry();
            entry.entryName = entryName;
            entry.comment = comment || "";
            entry.attr = attr || 438; //0666;
            if (entry.isDirectory && content.length) {
               // throw Utils.Errors.DIRECTORY_CONTENT_ERROR;
            }
            entry.setData(content);
            _zip.setEntry(entry);
        },

        /**
         * Returns an array of ZipEntry objects representing the files and folders inside the archive
         *
         * @return Array
         */
        getEntries : function() {
            if (_zip) {
               return _zip.entries;
            } else {
                return [];
            }
        },

        /**
         * Returns a ZipEntry object representi