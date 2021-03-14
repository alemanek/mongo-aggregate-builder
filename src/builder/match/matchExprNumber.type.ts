/**
 * The expressions which work only with number types for the MongoDB match aggregation.
 */
export type TMatchNumberExp = {
    /**
     * Greater than expression.
     */
    $gt?: number;

    /**
     * Greater than or equal to expression
     */
    $gte?: number;

    /**
     * Less than expression
     */
    $lt?: number;

    /**
     * Less than or equal to expression;
     */
    $lte?: number;
}