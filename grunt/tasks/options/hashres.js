module.exports = {
    // Global options
    options: {
        encoding: 'utf8',
        fileNameFormat: '${name}.v${hash}.${ext}',
        renameFiles: true
    },
    prodSprites: {
        src: [
          'DagensNyheter.WebEditorialAdministration/Content/sprites/spritesheet.png'
        ],
        // File that refers to above files and needs to be updated with the hashed name
        dest: [
            'DagensNyheter.WebEditorialAdministration/Content/css/sprites.css',
            'DagensNyheter.WebEditorialAdministration/Content/css/dnse.min.css',
            'DagensNyheter.WebEditorialAdministration/Content/css/dnse.combined.css'
        ]
    },
    prodCssAndJs: {
        src: [
          'DagensNyheter.WebEditorialAdministration/Content/css/dnse.min.css',
          'DagensNyheter.WebEditorialAdministration/Scripts/dnse.min.js'
        ],
        // File that refers to above files and needs to be updated with the hashed name
        dest: [
            'DagensNyheter.WebEditorialAdministration/Views/Shared/InsertStylesAndScripts.cshtml'
        ]
    }
}