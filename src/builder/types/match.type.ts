export type TMatch<T> = {
    /**
     * For every key in T use the type if it is primative otherwise use a TMatch type as the type.
     *
     * TODO:  replace "object" with mongo expression object once that is written.
     */
    [P in keyof T]?: T[P] extends object ? TMatch<T[P]> : T[P] | object;
}