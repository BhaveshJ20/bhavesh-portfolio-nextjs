/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./components/LoadingScreen.tsx":
/*!**************************************!*\
  !*** ./components/LoadingScreen.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LoadingScreen)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction LoadingScreen({ onComplete }) {\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [textSlide, setTextSlide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [letterReveal, setLetterReveal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"LoadingScreen.useEffect\": ()=>{\n            // Text slides from top to center with low opacity\n            const textTimer = setTimeout({\n                \"LoadingScreen.useEffect.textTimer\": ()=>{\n                    setTextSlide(true);\n                }\n            }[\"LoadingScreen.useEffect.textTimer\"], 300);\n            // Letter-by-letter opacity reveal starts after text stops\n            const letterTimer = setTimeout({\n                \"LoadingScreen.useEffect.letterTimer\": ()=>{\n                    const letters = [\n                        'B',\n                        'h',\n                        'a',\n                        'v',\n                        'e',\n                        's',\n                        'h'\n                    ];\n                    letters.forEach({\n                        \"LoadingScreen.useEffect.letterTimer\": (_, index)=>{\n                            setTimeout({\n                                \"LoadingScreen.useEffect.letterTimer\": ()=>{\n                                    setLetterReveal({\n                                        \"LoadingScreen.useEffect.letterTimer\": (prev)=>[\n                                                ...prev,\n                                                index\n                                            ]\n                                    }[\"LoadingScreen.useEffect.letterTimer\"]);\n                                }\n                            }[\"LoadingScreen.useEffect.letterTimer\"], 100 * index); // 100ms delay between each letter\n                        }\n                    }[\"LoadingScreen.useEffect.letterTimer\"]);\n                }\n            }[\"LoadingScreen.useEffect.letterTimer\"], 1200); // Start letter reveal after text animation\n            // Hide after 3 seconds\n            const hideTimer = setTimeout({\n                \"LoadingScreen.useEffect.hideTimer\": ()=>{\n                    setIsVisible(false);\n                    setTimeout({\n                        \"LoadingScreen.useEffect.hideTimer\": ()=>{\n                            onComplete();\n                        }\n                    }[\"LoadingScreen.useEffect.hideTimer\"], 300);\n                }\n            }[\"LoadingScreen.useEffect.hideTimer\"], 3000);\n            return ({\n                \"LoadingScreen.useEffect\": ()=>{\n                    clearTimeout(textTimer);\n                    clearTimeout(letterTimer);\n                    clearTimeout(hideTimer);\n                }\n            })[\"LoadingScreen.useEffect\"];\n        }\n    }[\"LoadingScreen.useEffect\"], [\n        onComplete\n    ]);\n    if (!isVisible) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            position: 'fixed',\n            top: 0,\n            left: 0,\n            width: '100vw',\n            height: '100vh',\n            background: 'linear-gradient(135deg, #0a0a0a 0%, #050505 50%, #0a0a0a 100%)',\n            display: 'flex',\n            alignItems: 'center',\n            justifyContent: 'center',\n            zIndex: 9999,\n            opacity: isVisible ? 1 : 0,\n            transition: 'opacity 0.3s ease-in-out'\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                fontFamily: \"'Syne', sans-serif\",\n                fontSize: 'clamp(4rem, 12vw, 8rem)',\n                fontWeight: 700,\n                overflow: 'hidden',\n                display: 'flex',\n                width: 'max-content',\n                textTransform: 'uppercase',\n                letterSpacing: '0.02em',\n                transform: textSlide ? 'translateY(0%)' : 'translateY(-50vh)',\n                opacity: textSlide ? 0.3 : 0,\n                transition: 'transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 1.2s ease-in-out',\n                transitionDelay: '0.1s'\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: 'flex',\n                    width: 'max-content'\n                },\n                children: 'Bhavesh'.split('').map((letter, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        style: {\n                            display: 'inline-block',\n                            backfaceVisibility: 'hidden',\n                            fontFamily: 'inherit',\n                            fontWeight: 'inherit',\n                            fontStyle: 'inherit',\n                            fontSize: 'inherit',\n                            letterSpacing: 'inherit',\n                            lineHeight: '1',\n                            userSelect: 'none',\n                            color: letterReveal.includes(index) ? '#ffffff' : '#888888',\n                            opacity: letterReveal.includes(index) ? 1 : 0.3,\n                            transition: 'color 0.4s ease-in-out, opacity 0.4s ease-in-out',\n                            transitionDelay: `${index * 0.05}s`\n                        },\n                        children: letter\n                    }, index, false, {\n                        fileName: \"F:\\\\bhavesh-portfolio-nextjs\\\\components\\\\LoadingScreen.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"F:\\\\bhavesh-portfolio-nextjs\\\\components\\\\LoadingScreen.tsx\",\n                lineNumber: 79,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"F:\\\\bhavesh-portfolio-nextjs\\\\components\\\\LoadingScreen.tsx\",\n            lineNumber: 62,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"F:\\\\bhavesh-portfolio-nextjs\\\\components\\\\LoadingScreen.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvTG9hZGluZ1NjcmVlbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1EO0FBTXBDLFNBQVNHLGNBQWMsRUFBRUMsVUFBVSxFQUFzQjtJQUN0RSxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0wsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDTSxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1EsY0FBY0MsZ0JBQWdCLEdBQUdULCtDQUFRQSxDQUFXLEVBQUU7SUFFN0RDLGdEQUFTQTttQ0FBQztZQUNSLGtEQUFrRDtZQUNsRCxNQUFNUyxZQUFZQztxREFBVztvQkFDM0JKLGFBQWE7Z0JBQ2Y7b0RBQUc7WUFFSCwwREFBMEQ7WUFDMUQsTUFBTUssY0FBY0Q7dURBQVc7b0JBQzdCLE1BQU1FLFVBQVU7d0JBQUM7d0JBQUs7d0JBQUs7d0JBQUs7d0JBQUs7d0JBQUs7d0JBQUs7cUJBQUk7b0JBQ25EQSxRQUFRQyxPQUFPOytEQUFDLENBQUNDLEdBQUdDOzRCQUNsQkw7dUVBQVc7b0NBQ1RGOytFQUFnQlEsQ0FBQUEsT0FBUTttREFBSUE7Z0RBQU1EOzZDQUFNOztnQ0FDMUM7c0VBQUcsTUFBTUEsUUFBUSxrQ0FBa0M7d0JBQ3JEOztnQkFDRjtzREFBRyxPQUFPLDJDQUEyQztZQUVyRCx1QkFBdUI7WUFDdkIsTUFBTUUsWUFBWVA7cURBQVc7b0JBQzNCTixhQUFhO29CQUNiTTs2REFBVzs0QkFDVFI7d0JBQ0Y7NERBQUc7Z0JBQ0w7b0RBQUc7WUFFSDsyQ0FBTztvQkFDTGdCLGFBQWFUO29CQUNiUyxhQUFhUDtvQkFDYk8sYUFBYUQ7Z0JBQ2Y7O1FBQ0Y7a0NBQUc7UUFBQ2Y7S0FBVztJQUVmLElBQUksQ0FBQ0MsV0FBVyxPQUFPO0lBRXZCLHFCQUNFLDhEQUFDZ0I7UUFDQ0MsT0FBTztZQUNMQyxVQUFVO1lBQ1ZDLEtBQUs7WUFDTEMsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLFFBQVE7WUFDUkMsWUFBWTtZQUNaQyxTQUFTO1lBQ1RDLFlBQVk7WUFDWkMsZ0JBQWdCO1lBQ2hCQyxRQUFRO1lBQ1JDLFNBQVM1QixZQUFZLElBQUk7WUFDekI2QixZQUFZO1FBQ2Q7a0JBRUEsNEVBQUNiO1lBQ0NDLE9BQU87Z0JBQ0xhLFlBQVk7Z0JBQ1pDLFVBQVU7Z0JBQ1ZDLFlBQVk7Z0JBQ1pDLFVBQVU7Z0JBQ1ZULFNBQVM7Z0JBQ1RILE9BQU87Z0JBQ1BhLGVBQWU7Z0JBQ2ZDLGVBQWU7Z0JBQ2ZDLFdBQVdsQyxZQUFZLG1CQUFtQjtnQkFDMUMwQixTQUFTMUIsWUFBWSxNQUFNO2dCQUMzQjJCLFlBQVk7Z0JBQ1pRLGlCQUFpQjtZQUNuQjtzQkFHQSw0RUFBQ3JCO2dCQUNDQyxPQUFPO29CQUNMTyxTQUFTO29CQUNUSCxPQUFPO2dCQUNUOzBCQUVDLFVBQVVpQixLQUFLLENBQUMsSUFBSUMsR0FBRyxDQUFDLENBQUNDLFFBQVE1QixzQkFDaEMsOERBQUM2Qjt3QkFFQ3hCLE9BQU87NEJBQ0xPLFNBQVM7NEJBQ1RrQixvQkFBb0I7NEJBQ3BCWixZQUFZOzRCQUNaRSxZQUFZOzRCQUNaVyxXQUFXOzRCQUNYWixVQUFVOzRCQUNWSSxlQUFlOzRCQUNmUyxZQUFZOzRCQUNaQyxZQUFZOzRCQUNaQyxPQUFPMUMsYUFBYTJDLFFBQVEsQ0FBQ25DLFNBQVMsWUFBWTs0QkFDbERnQixTQUFTeEIsYUFBYTJDLFFBQVEsQ0FBQ25DLFNBQVMsSUFBSTs0QkFDNUNpQixZQUFZOzRCQUNaUSxpQkFBaUIsR0FBR3pCLFFBQVEsS0FBSyxDQUFDLENBQUM7d0JBQ3JDO2tDQUVDNEI7dUJBakJJNUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JuQiIsInNvdXJjZXMiOlsiRjpcXGJoYXZlc2gtcG9ydGZvbGlvLW5leHRqc1xcY29tcG9uZW50c1xcTG9hZGluZ1NjcmVlbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgTG9hZGluZ1NjcmVlblByb3BzIHtcclxuICBvbkNvbXBsZXRlOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkaW5nU2NyZWVuKHsgb25Db21wbGV0ZSB9OiBMb2FkaW5nU2NyZWVuUHJvcHMpIHtcclxuICBjb25zdCBbaXNWaXNpYmxlLCBzZXRJc1Zpc2libGVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3RleHRTbGlkZSwgc2V0VGV4dFNsaWRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbGV0dGVyUmV2ZWFsLCBzZXRMZXR0ZXJSZXZlYWxdID0gdXNlU3RhdGU8bnVtYmVyW10+KFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIFRleHQgc2xpZGVzIGZyb20gdG9wIHRvIGNlbnRlciB3aXRoIGxvdyBvcGFjaXR5XHJcbiAgICBjb25zdCB0ZXh0VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0VGV4dFNsaWRlKHRydWUpO1xyXG4gICAgfSwgMzAwKTtcclxuXHJcbiAgICAvLyBMZXR0ZXItYnktbGV0dGVyIG9wYWNpdHkgcmV2ZWFsIHN0YXJ0cyBhZnRlciB0ZXh0IHN0b3BzXHJcbiAgICBjb25zdCBsZXR0ZXJUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCBsZXR0ZXJzID0gWydCJywgJ2gnLCAnYScsICd2JywgJ2UnLCAncycsICdoJ107XHJcbiAgICAgIGxldHRlcnMuZm9yRWFjaCgoXywgaW5kZXgpID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHNldExldHRlclJldmVhbChwcmV2ID0+IFsuLi5wcmV2LCBpbmRleF0pO1xyXG4gICAgICAgIH0sIDEwMCAqIGluZGV4KTsgLy8gMTAwbXMgZGVsYXkgYmV0d2VlbiBlYWNoIGxldHRlclxyXG4gICAgICB9KTtcclxuICAgIH0sIDEyMDApOyAvLyBTdGFydCBsZXR0ZXIgcmV2ZWFsIGFmdGVyIHRleHQgYW5pbWF0aW9uXHJcblxyXG4gICAgLy8gSGlkZSBhZnRlciAzIHNlY29uZHNcclxuICAgIGNvbnN0IGhpZGVUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRJc1Zpc2libGUoZmFsc2UpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBvbkNvbXBsZXRlKCk7XHJcbiAgICAgIH0sIDMwMCk7XHJcbiAgICB9LCAzMDAwKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGV4dFRpbWVyKTtcclxuICAgICAgY2xlYXJUaW1lb3V0KGxldHRlclRpbWVyKTtcclxuICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lcik7XHJcbiAgICB9O1xyXG4gIH0sIFtvbkNvbXBsZXRlXSk7XHJcblxyXG4gIGlmICghaXNWaXNpYmxlKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgd2lkdGg6ICcxMDB2dycsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMGEwYTBhIDAlLCAjMDUwNTA1IDUwJSwgIzBhMGEwYSAxMDAlKScsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICB6SW5kZXg6IDk5OTksXHJcbiAgICAgICAgb3BhY2l0eTogaXNWaXNpYmxlID8gMSA6IDAsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogJ29wYWNpdHkgMC4zcyBlYXNlLWluLW91dCcsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZm9udEZhbWlseTogXCInU3luZScsIHNhbnMtc2VyaWZcIixcclxuICAgICAgICAgIGZvbnRTaXplOiAnY2xhbXAoNHJlbSwgMTJ2dywgOHJlbSknLFxyXG4gICAgICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgd2lkdGg6ICdtYXgtY29udGVudCcsXHJcbiAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcclxuICAgICAgICAgIGxldHRlclNwYWNpbmc6ICcwLjAyZW0nLFxyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0ZXh0U2xpZGUgPyAndHJhbnNsYXRlWSgwJSknIDogJ3RyYW5zbGF0ZVkoLTUwdmgpJyxcclxuICAgICAgICAgIG9wYWNpdHk6IHRleHRTbGlkZSA/IDAuMyA6IDAsIC8vIExvdyBvcGFjaXR5IHdoZW4gY2VudGVyZWRcclxuICAgICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gMS4ycyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCksIG9wYWNpdHkgMS4ycyBlYXNlLWluLW91dCcsXHJcbiAgICAgICAgICB0cmFuc2l0aW9uRGVsYXk6ICcwLjFzJyxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgey8qIExldHRlci1ieS1sZXR0ZXIgb3BhY2l0eSByZXZlYWwgKi99XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICB3aWR0aDogJ21heC1jb250ZW50JyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgeydCaGF2ZXNoJy5zcGxpdCgnJykubWFwKChsZXR0ZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgICAgICAgICBiYWNrZmFjZVZpc2liaWxpdHk6ICdoaWRkZW4nLFxyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogJ2luaGVyaXQnLFxyXG4gICAgICAgICAgICAgICAgZm9udFN0eWxlOiAnaW5oZXJpdCcsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxyXG4gICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZzogJ2luaGVyaXQnLFxyXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogJzEnLFxyXG4gICAgICAgICAgICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IGxldHRlclJldmVhbC5pbmNsdWRlcyhpbmRleCkgPyAnI2ZmZmZmZicgOiAnIzg4ODg4OCcsIC8vIFRoZW1lIGdyYXkgdG8gd2hpdGUgdHJhbnNpdGlvblxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogbGV0dGVyUmV2ZWFsLmluY2x1ZGVzKGluZGV4KSA/IDEgOiAwLjMsIC8vIEluZGl2aWR1YWwgbGV0dGVyIG9wYWNpdHlcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246ICdjb2xvciAwLjRzIGVhc2UtaW4tb3V0LCBvcGFjaXR5IDAuNHMgZWFzZS1pbi1vdXQnLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbkRlbGF5OiBgJHtpbmRleCAqIDAuMDV9c2AsIC8vIFN0YWdnZXJlZCB0cmFuc2l0aW9uXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtsZXR0ZXJ9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMb2FkaW5nU2NyZWVuIiwib25Db21wbGV0ZSIsImlzVmlzaWJsZSIsInNldElzVmlzaWJsZSIsInRleHRTbGlkZSIsInNldFRleHRTbGlkZSIsImxldHRlclJldmVhbCIsInNldExldHRlclJldmVhbCIsInRleHRUaW1lciIsInNldFRpbWVvdXQiLCJsZXR0ZXJUaW1lciIsImxldHRlcnMiLCJmb3JFYWNoIiwiXyIsImluZGV4IiwicHJldiIsImhpZGVUaW1lciIsImNsZWFyVGltZW91dCIsImRpdiIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInpJbmRleCIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIm92ZXJmbG93IiwidGV4dFRyYW5zZm9ybSIsImxldHRlclNwYWNpbmciLCJ0cmFuc2Zvcm0iLCJ0cmFuc2l0aW9uRGVsYXkiLCJzcGxpdCIsIm1hcCIsImxldHRlciIsInNwYW4iLCJiYWNrZmFjZVZpc2liaWxpdHkiLCJmb250U3R5bGUiLCJsaW5lSGVpZ2h0IiwidXNlclNlbGVjdCIsImNvbG9yIiwiaW5jbHVkZXMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/LoadingScreen.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_LoadingScreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LoadingScreen */ \"(pages-dir-node)/./components/LoadingScreen.tsx\");\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [hasSeenLoading, setHasSeenLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"App.useEffect\": ()=>{\n            // Only access localStorage on client side\n            if (false) {}\n        }\n    }[\"App.useEffect\"], [\n        router.pathname\n    ]);\n    const handleLoadingComplete = ()=>{\n        setIsLoading(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoadingScreen__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onComplete: handleLoadingComplete\n            }, void 0, false, {\n                fileName: \"F:\\\\bhavesh-portfolio-nextjs\\\\pages\\\\_app.tsx\",\n                lineNumber: 34,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    opacity: isLoading ? 0 : 1,\n                    transition: 'opacity 0.3s ease-in-out'\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"F:\\\\bhavesh-portfolio-nextjs\\\\pages\\\\_app.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"F:\\\\bhavesh-portfolio-nextjs\\\\pages\\\\_app.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBRWE7QUFDSjtBQUNnQjtBQUV6QyxTQUFTSSxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQzVELE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNTLGdCQUFnQkMsa0JBQWtCLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3JELE1BQU1XLFNBQVNULHNEQUFTQTtJQUV4QkQsZ0RBQVNBO3lCQUFDO1lBQ1IsMENBQTBDO1lBQzFDLElBQUksS0FBNkIsRUFBRSxFQVdsQztRQUNIO3dCQUFHO1FBQUNVLE9BQU9JLFFBQVE7S0FBQztJQUVwQixNQUFNRSx3QkFBd0I7UUFDNUJULGFBQWE7SUFDZjtJQUVBLHFCQUNFOztZQUNHRCwyQkFBYSw4REFBQ0osaUVBQWFBO2dCQUFDZSxZQUFZRDs7Ozs7OzBCQUN6Qyw4REFBQ0U7Z0JBQUlDLE9BQU87b0JBQUVDLFNBQVNkLFlBQVksSUFBSTtvQkFBR2UsWUFBWTtnQkFBMkI7MEJBQy9FLDRFQUFDakI7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7OztBQUloQyIsInNvdXJjZXMiOlsiRjpcXGJoYXZlc2gtcG9ydGZvbGlvLW5leHRqc1xccGFnZXNcXF9hcHAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTG9hZGluZ1NjcmVlbiBmcm9tICcuLi9jb21wb25lbnRzL0xvYWRpbmdTY3JlZW4nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtoYXNTZWVuTG9hZGluZywgc2V0SGFzU2VlbkxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gT25seSBhY2Nlc3MgbG9jYWxTdG9yYWdlIG9uIGNsaWVudCBzaWRlXHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgLy8gQ2hlY2sgaWYgdXNlciBoYXMgYWxyZWFkeSBzZWVuIHRoZSBsb2FkaW5nIHNjcmVlblxyXG4gICAgICBjb25zdCBoYXNTZWVuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hhc1NlZW5Mb2FkaW5nU2NyZWVuJyk7XHJcbiAgICAgIHNldEhhc1NlZW5Mb2FkaW5nKCEhaGFzU2Vlbik7XHJcblxyXG4gICAgICAvLyBPbmx5IHNob3cgbG9hZGluZyBzY3JlZW4gb24gZmlyc3QgdmlzaXQgdG8gaG9tZSBwYWdlXHJcbiAgICAgIGlmIChyb3V0ZXIucGF0aG5hbWUgPT09ICcvJyAmJiAhaGFzU2Vlbikge1xyXG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgICAgICAvLyBNYXJrIHRoYXQgdXNlciBoYXMgc2VlbiB0aGUgbG9hZGluZyBzY3JlZW5cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGFzU2VlbkxvYWRpbmdTY3JlZW4nLCAndHJ1ZScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlci5wYXRobmFtZV0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2FkaW5nQ29tcGxldGUgPSAoKSA9PiB7XHJcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7aXNMb2FkaW5nICYmIDxMb2FkaW5nU2NyZWVuIG9uQ29tcGxldGU9e2hhbmRsZUxvYWRpbmdDb21wbGV0ZX0gLz59XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgb3BhY2l0eTogaXNMb2FkaW5nID8gMCA6IDEsIHRyYW5zaXRpb246ICdvcGFjaXR5IDAuM3MgZWFzZS1pbi1vdXQnIH19PlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkxvYWRpbmdTY3JlZW4iLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJoYXNTZWVuTG9hZGluZyIsInNldEhhc1NlZW5Mb2FkaW5nIiwicm91dGVyIiwiaGFzU2VlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwYXRobmFtZSIsInNldEl0ZW0iLCJoYW5kbGVMb2FkaW5nQ29tcGxldGUiLCJvbkNvbXBsZXRlIiwiZGl2Iiwic3R5bGUiLCJvcGFjaXR5IiwidHJhbnNpdGlvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();