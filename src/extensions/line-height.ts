import { Extension } from "@tiptap/react";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    lineHeight: {
      setLineHeight: (lineHeight: string) => ReturnType
    }
  } 
}

export const LineHeightExtension = Extension.create({
    name: 'lineHeight',
    addOptions() {
        return {
            types: ['paragraph', 'heading'],
            defaultLineHeight: 'normal',
        }
    },
    addGlobalAttributes() {
        return [
            {
                types: this.options.types,
                attributes: {
                    lineHeight: {
                        default: this.options.defaultLineHeight,
                        renderHTML: attributes => {
                            if (attributes.lineHeight === 'normal') {
                                return {}
                            }
                            return {
                                style: `line-height: ${attributes.lineHeight}`
                            }
                        },
                        parseHTML: element => ({
                            lineHeight: element.style.lineHeight || this.options.defaultLineHeight,
                        }),
                    },
                },
            },
        ]
    }, 
    addCommands() {
        return {
            setLineHeight: lineHeight => ({ chain }) => {
                return chain().setMark('paragraph', { lineHeight }).run()
            },
        }
    },     

})