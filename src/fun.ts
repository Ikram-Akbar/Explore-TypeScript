// the type void can be used to indicate a function docent's return any value

function message(): void {
    console.log("hello");
}

// parameters typed

function multiply(a: number, b: number) {
    return a * b;
};


// If no parameter type is defined, TypeScript will default to using any, unless additional type information is available as shown in the Default Parameters and Type Alias sections below.

// optional parameter

function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);

}