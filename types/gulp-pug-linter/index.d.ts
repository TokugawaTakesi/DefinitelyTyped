// Type definitions for gulp-tap 1.0
// Project: https://github.com/ilyakam/gulp-pug-linter
// Definitions by: Takesi Tokugawa <https://github.com/TokugawaTakesi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

interface GulpPugLinter {
    (options?: GulpPugLinter.Options): NodeJS.ReadWriteStream;
}

declare namespace GulpPugLinter {
    interface Options {
        reporter?: 'default' | any;
        failAfterError?: boolean;
    }
}

declare var gulpPugLinter: GulpPugLinter;
export = gulpPugLinter;
