/*
 * Configuration settings and constants
 *
 * Manage them in the same place so it's easy to factor constants into the configuration
 * file without impacting a lot of code
 */
import * as vscode from 'vscode';

export namespace Settings {

    export const CompletedTagLength = "x yyyy-mm-dd ".length;
    export const PriorityTagLength = "(A) ".length;

    // move to configuration
    export const TodoFilename:string = 'todo.txt'
    export const DoneFilename:string = 'done.txt'
    export const SomedayFilename:string = 'incubate.txt'
    export const WaitingFilename:string = 'waiting.txt'
    
    export const Message:string = getSetting("message");
    export const SortCompletedTasksToEnd:boolean = getSetting("sortCompletedTasksToEnd", false);
    export const CommandFilePattern:string = getSetting("commandFilePattern");
    export const ExcludeDecorationsFilePattern:string = getSetting("excludeDecorationsFilePattern");
    export const SectionDelimiterPattern:string = getSetting("sectionDelimiterPattern");

    export const ContextStyle = Object.assign({}, getSetting("contextStyle"), 
//    export const ContextStyle = {
    {
        light: {
            color: 'rgb(40, 161, 86)'
        },
        dark: {
            color: 'rgb(40, 161, 86)'
        }
    });
    export const HighPriorityStyle = {
        light: {
            color: 'rgb(230, 216, 25)'
        },
        dark: {
            color: 'rgb(230, 216, 25)'
        }
    };
    export const MediumPriorityStyle = {
        light: {
            color: 'rgb(167, 157, 28)'
        },
        dark: {
            color: 'rgb(167, 157, 28)'
        }
    };
    export const LowPriorityStyle = {
        light: {
            color: 'rgb(100, 95, 16)'
        },
        dark: {
            color: 'rgb(100, 95, 16)'
        }
    };
    export const ProjectStyle = {
        light: {
            color: 'rgb(25, 172, 230)'
        },
        dark: {
            color: 'rgb(25, 172, 230)'
        }
    };
    export const TagStyle = {
        light: {
            color: 'rgb(179, 58, 172)'
        },
        dark: {
            color: 'rgb(179, 58, 172)'
        }
    };
    export const CompletedStyle = {
        textDecoration: "line-through",
        opacity: "0.5"
    };
    export const PastDateStyle = {
        light: {
            color: 'rgb(177, 58, 28)'
        },
        dark: {
            color: 'rgb(177, 58, 28)'
        }
    };
    export const PresentDateStyle = {
        light: {
            color: 'rgb(219, 216, 26)'
        },
        dark: {
            color: 'rgb(219, 216, 26)'
        }
    };
    export const FutureDateStyle = {
        light: {
            color: 'rgb(118, 194, 31)'
        },
        dark: {
            color: 'rgb(118, 194, 31)'
        }
    }

    function getSetting<T>(field:string, defaultValue?: T): T | undefined {
        return vscode.workspace.getConfiguration("todotxtmode").get(field, defaultValue);
    }

}