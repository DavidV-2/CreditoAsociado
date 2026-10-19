
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model TipoCliente
 * 
 */
export type TipoCliente = $Result.DefaultSelection<Prisma.$TipoClientePayload>
/**
 * Model TipoDocumento
 * 
 */
export type TipoDocumento = $Result.DefaultSelection<Prisma.$TipoDocumentoPayload>
/**
 * Model TipoCredito
 * 
 */
export type TipoCredito = $Result.DefaultSelection<Prisma.$TipoCreditoPayload>
/**
 * Model EstadoCredito
 * 
 */
export type EstadoCredito = $Result.DefaultSelection<Prisma.$EstadoCreditoPayload>
/**
 * Model MetodoPago
 * 
 */
export type MetodoPago = $Result.DefaultSelection<Prisma.$MetodoPagoPayload>
/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Asesor
 * 
 */
export type Asesor = $Result.DefaultSelection<Prisma.$AsesorPayload>
/**
 * Model CreditoAsociado
 * 
 */
export type CreditoAsociado = $Result.DefaultSelection<Prisma.$CreditoAsociadoPayload>
/**
 * Model HistorialCredito
 * 
 */
export type HistorialCredito = $Result.DefaultSelection<Prisma.$HistorialCreditoPayload>
/**
 * Model WebhookOutbox
 * 
 */
export type WebhookOutbox = $Result.DefaultSelection<Prisma.$WebhookOutboxPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more TipoClientes
 * const tipoClientes = await prisma.tipoCliente.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more TipoClientes
   * const tipoClientes = await prisma.tipoCliente.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tipoCliente`: Exposes CRUD operations for the **TipoCliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoClientes
    * const tipoClientes = await prisma.tipoCliente.findMany()
    * ```
    */
  get tipoCliente(): Prisma.TipoClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipoDocumento`: Exposes CRUD operations for the **TipoDocumento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoDocumentos
    * const tipoDocumentos = await prisma.tipoDocumento.findMany()
    * ```
    */
  get tipoDocumento(): Prisma.TipoDocumentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipoCredito`: Exposes CRUD operations for the **TipoCredito** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoCreditos
    * const tipoCreditos = await prisma.tipoCredito.findMany()
    * ```
    */
  get tipoCredito(): Prisma.TipoCreditoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estadoCredito`: Exposes CRUD operations for the **EstadoCredito** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EstadoCreditos
    * const estadoCreditos = await prisma.estadoCredito.findMany()
    * ```
    */
  get estadoCredito(): Prisma.EstadoCreditoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.metodoPago`: Exposes CRUD operations for the **MetodoPago** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MetodoPagos
    * const metodoPagos = await prisma.metodoPago.findMany()
    * ```
    */
  get metodoPago(): Prisma.MetodoPagoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.asesor`: Exposes CRUD operations for the **Asesor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Asesors
    * const asesors = await prisma.asesor.findMany()
    * ```
    */
  get asesor(): Prisma.AsesorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.creditoAsociado`: Exposes CRUD operations for the **CreditoAsociado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CreditoAsociados
    * const creditoAsociados = await prisma.creditoAsociado.findMany()
    * ```
    */
  get creditoAsociado(): Prisma.CreditoAsociadoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historialCredito`: Exposes CRUD operations for the **HistorialCredito** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HistorialCreditos
    * const historialCreditos = await prisma.historialCredito.findMany()
    * ```
    */
  get historialCredito(): Prisma.HistorialCreditoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.webhookOutbox`: Exposes CRUD operations for the **WebhookOutbox** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WebhookOutboxes
    * const webhookOutboxes = await prisma.webhookOutbox.findMany()
    * ```
    */
  get webhookOutbox(): Prisma.WebhookOutboxDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.1
   * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    TipoCliente: 'TipoCliente',
    TipoDocumento: 'TipoDocumento',
    TipoCredito: 'TipoCredito',
    EstadoCredito: 'EstadoCredito',
    MetodoPago: 'MetodoPago',
    Cliente: 'Cliente',
    Asesor: 'Asesor',
    CreditoAsociado: 'CreditoAsociado',
    HistorialCredito: 'HistorialCredito',
    WebhookOutbox: 'WebhookOutbox'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tipoCliente" | "tipoDocumento" | "tipoCredito" | "estadoCredito" | "metodoPago" | "cliente" | "asesor" | "creditoAsociado" | "historialCredito" | "webhookOutbox"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      TipoCliente: {
        payload: Prisma.$TipoClientePayload<ExtArgs>
        fields: Prisma.TipoClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoClientePayload>
          }
          findFirst: {
            args: Prisma.TipoClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoClientePayload>
          }
          findMany: {
            args: Prisma.TipoClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoClientePayload>[]
          }
          create: {
            args: Prisma.TipoClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoClientePayload>
          }
          createMany: {
            args: Prisma.TipoClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TipoClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoClientePayload>
          }
          update: {
            args: Prisma.TipoClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoClientePayload>
          }
          deleteMany: {
            args: Prisma.TipoClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TipoClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoClientePayload>
          }
          aggregate: {
            args: Prisma.TipoClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoCliente>
          }
          groupBy: {
            args: Prisma.TipoClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoClienteCountArgs<ExtArgs>
            result: $Utils.Optional<TipoClienteCountAggregateOutputType> | number
          }
        }
      }
      TipoDocumento: {
        payload: Prisma.$TipoDocumentoPayload<ExtArgs>
        fields: Prisma.TipoDocumentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoDocumentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDocumentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoDocumentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDocumentoPayload>
          }
          findFirst: {
            args: Prisma.TipoDocumentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDocumentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoDocumentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDocumentoPayload>
          }
          findMany: {
            args: Prisma.TipoDocumentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDocumentoPayload>[]
          }
          create: {
            args: Prisma.TipoDocumentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDocumentoPayload>
          }
          createMany: {
            args: Prisma.TipoDocumentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TipoDocumentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDocumentoPayload>
          }
          update: {
            args: Prisma.TipoDocumentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDocumentoPayload>
          }
          deleteMany: {
            args: Prisma.TipoDocumentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoDocumentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TipoDocumentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoDocumentoPayload>
          }
          aggregate: {
            args: Prisma.TipoDocumentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoDocumento>
          }
          groupBy: {
            args: Prisma.TipoDocumentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoDocumentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoDocumentoCountArgs<ExtArgs>
            result: $Utils.Optional<TipoDocumentoCountAggregateOutputType> | number
          }
        }
      }
      TipoCredito: {
        payload: Prisma.$TipoCreditoPayload<ExtArgs>
        fields: Prisma.TipoCreditoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoCreditoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoCreditoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoCreditoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoCreditoPayload>
          }
          findFirst: {
            args: Prisma.TipoCreditoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoCreditoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoCreditoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoCreditoPayload>
          }
          findMany: {
            args: Prisma.TipoCreditoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoCreditoPayload>[]
          }
          create: {
            args: Prisma.TipoCreditoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoCreditoPayload>
          }
          createMany: {
            args: Prisma.TipoCreditoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TipoCreditoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoCreditoPayload>
          }
          update: {
            args: Prisma.TipoCreditoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoCreditoPayload>
          }
          deleteMany: {
            args: Prisma.TipoCreditoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoCreditoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TipoCreditoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoCreditoPayload>
          }
          aggregate: {
            args: Prisma.TipoCreditoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoCredito>
          }
          groupBy: {
            args: Prisma.TipoCreditoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoCreditoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoCreditoCountArgs<ExtArgs>
            result: $Utils.Optional<TipoCreditoCountAggregateOutputType> | number
          }
        }
      }
      EstadoCredito: {
        payload: Prisma.$EstadoCreditoPayload<ExtArgs>
        fields: Prisma.EstadoCreditoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstadoCreditoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoCreditoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstadoCreditoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoCreditoPayload>
          }
          findFirst: {
            args: Prisma.EstadoCreditoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoCreditoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstadoCreditoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoCreditoPayload>
          }
          findMany: {
            args: Prisma.EstadoCreditoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoCreditoPayload>[]
          }
          create: {
            args: Prisma.EstadoCreditoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoCreditoPayload>
          }
          createMany: {
            args: Prisma.EstadoCreditoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EstadoCreditoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoCreditoPayload>
          }
          update: {
            args: Prisma.EstadoCreditoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoCreditoPayload>
          }
          deleteMany: {
            args: Prisma.EstadoCreditoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstadoCreditoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EstadoCreditoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstadoCreditoPayload>
          }
          aggregate: {
            args: Prisma.EstadoCreditoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstadoCredito>
          }
          groupBy: {
            args: Prisma.EstadoCreditoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstadoCreditoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstadoCreditoCountArgs<ExtArgs>
            result: $Utils.Optional<EstadoCreditoCountAggregateOutputType> | number
          }
        }
      }
      MetodoPago: {
        payload: Prisma.$MetodoPagoPayload<ExtArgs>
        fields: Prisma.MetodoPagoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetodoPagoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetodoPagoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetodoPagoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetodoPagoPayload>
          }
          findFirst: {
            args: Prisma.MetodoPagoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetodoPagoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetodoPagoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetodoPagoPayload>
          }
          findMany: {
            args: Prisma.MetodoPagoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetodoPagoPayload>[]
          }
          create: {
            args: Prisma.MetodoPagoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetodoPagoPayload>
          }
          createMany: {
            args: Prisma.MetodoPagoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MetodoPagoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetodoPagoPayload>
          }
          update: {
            args: Prisma.MetodoPagoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetodoPagoPayload>
          }
          deleteMany: {
            args: Prisma.MetodoPagoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetodoPagoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MetodoPagoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetodoPagoPayload>
          }
          aggregate: {
            args: Prisma.MetodoPagoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetodoPago>
          }
          groupBy: {
            args: Prisma.MetodoPagoGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetodoPagoGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetodoPagoCountArgs<ExtArgs>
            result: $Utils.Optional<MetodoPagoCountAggregateOutputType> | number
          }
        }
      }
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Asesor: {
        payload: Prisma.$AsesorPayload<ExtArgs>
        fields: Prisma.AsesorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AsesorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsesorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AsesorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsesorPayload>
          }
          findFirst: {
            args: Prisma.AsesorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsesorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AsesorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsesorPayload>
          }
          findMany: {
            args: Prisma.AsesorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsesorPayload>[]
          }
          create: {
            args: Prisma.AsesorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsesorPayload>
          }
          createMany: {
            args: Prisma.AsesorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AsesorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsesorPayload>
          }
          update: {
            args: Prisma.AsesorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsesorPayload>
          }
          deleteMany: {
            args: Prisma.AsesorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AsesorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AsesorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsesorPayload>
          }
          aggregate: {
            args: Prisma.AsesorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsesor>
          }
          groupBy: {
            args: Prisma.AsesorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AsesorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AsesorCountArgs<ExtArgs>
            result: $Utils.Optional<AsesorCountAggregateOutputType> | number
          }
        }
      }
      CreditoAsociado: {
        payload: Prisma.$CreditoAsociadoPayload<ExtArgs>
        fields: Prisma.CreditoAsociadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreditoAsociadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditoAsociadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreditoAsociadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditoAsociadoPayload>
          }
          findFirst: {
            args: Prisma.CreditoAsociadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditoAsociadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreditoAsociadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditoAsociadoPayload>
          }
          findMany: {
            args: Prisma.CreditoAsociadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditoAsociadoPayload>[]
          }
          create: {
            args: Prisma.CreditoAsociadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditoAsociadoPayload>
          }
          createMany: {
            args: Prisma.CreditoAsociadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CreditoAsociadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditoAsociadoPayload>
          }
          update: {
            args: Prisma.CreditoAsociadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditoAsociadoPayload>
          }
          deleteMany: {
            args: Prisma.CreditoAsociadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreditoAsociadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CreditoAsociadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditoAsociadoPayload>
          }
          aggregate: {
            args: Prisma.CreditoAsociadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCreditoAsociado>
          }
          groupBy: {
            args: Prisma.CreditoAsociadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreditoAsociadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreditoAsociadoCountArgs<ExtArgs>
            result: $Utils.Optional<CreditoAsociadoCountAggregateOutputType> | number
          }
        }
      }
      HistorialCredito: {
        payload: Prisma.$HistorialCreditoPayload<ExtArgs>
        fields: Prisma.HistorialCreditoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistorialCreditoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialCreditoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistorialCreditoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialCreditoPayload>
          }
          findFirst: {
            args: Prisma.HistorialCreditoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialCreditoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistorialCreditoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialCreditoPayload>
          }
          findMany: {
            args: Prisma.HistorialCreditoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialCreditoPayload>[]
          }
          create: {
            args: Prisma.HistorialCreditoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialCreditoPayload>
          }
          createMany: {
            args: Prisma.HistorialCreditoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HistorialCreditoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialCreditoPayload>
          }
          update: {
            args: Prisma.HistorialCreditoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialCreditoPayload>
          }
          deleteMany: {
            args: Prisma.HistorialCreditoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistorialCreditoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HistorialCreditoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialCreditoPayload>
          }
          aggregate: {
            args: Prisma.HistorialCreditoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistorialCredito>
          }
          groupBy: {
            args: Prisma.HistorialCreditoGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistorialCreditoGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistorialCreditoCountArgs<ExtArgs>
            result: $Utils.Optional<HistorialCreditoCountAggregateOutputType> | number
          }
        }
      }
      WebhookOutbox: {
        payload: Prisma.$WebhookOutboxPayload<ExtArgs>
        fields: Prisma.WebhookOutboxFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebhookOutboxFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookOutboxPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebhookOutboxFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookOutboxPayload>
          }
          findFirst: {
            args: Prisma.WebhookOutboxFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookOutboxPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebhookOutboxFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookOutboxPayload>
          }
          findMany: {
            args: Prisma.WebhookOutboxFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookOutboxPayload>[]
          }
          create: {
            args: Prisma.WebhookOutboxCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookOutboxPayload>
          }
          createMany: {
            args: Prisma.WebhookOutboxCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WebhookOutboxDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookOutboxPayload>
          }
          update: {
            args: Prisma.WebhookOutboxUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookOutboxPayload>
          }
          deleteMany: {
            args: Prisma.WebhookOutboxDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebhookOutboxUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WebhookOutboxUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookOutboxPayload>
          }
          aggregate: {
            args: Prisma.WebhookOutboxAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebhookOutbox>
          }
          groupBy: {
            args: Prisma.WebhookOutboxGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebhookOutboxGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebhookOutboxCountArgs<ExtArgs>
            result: $Utils.Optional<WebhookOutboxCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    tipoCliente?: TipoClienteOmit
    tipoDocumento?: TipoDocumentoOmit
    tipoCredito?: TipoCreditoOmit
    estadoCredito?: EstadoCreditoOmit
    metodoPago?: MetodoPagoOmit
    cliente?: ClienteOmit
    asesor?: AsesorOmit
    creditoAsociado?: CreditoAsociadoOmit
    historialCredito?: HistorialCreditoOmit
    webhookOutbox?: WebhookOutboxOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TipoClienteCountOutputType
   */

  export type TipoClienteCountOutputType = {
    clientes: number
  }

  export type TipoClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientes?: boolean | TipoClienteCountOutputTypeCountClientesArgs
  }

  // Custom InputTypes
  /**
   * TipoClienteCountOutputType without action
   */
  export type TipoClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoClienteCountOutputType
     */
    select?: TipoClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoClienteCountOutputType without action
   */
  export type TipoClienteCountOutputTypeCountClientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
  }


  /**
   * Count Type TipoDocumentoCountOutputType
   */

  export type TipoDocumentoCountOutputType = {
    clientes: number
  }

  export type TipoDocumentoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientes?: boolean | TipoDocumentoCountOutputTypeCountClientesArgs
  }

  // Custom InputTypes
  /**
   * TipoDocumentoCountOutputType without action
   */
  export type TipoDocumentoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDocumentoCountOutputType
     */
    select?: TipoDocumentoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoDocumentoCountOutputType without action
   */
  export type TipoDocumentoCountOutputTypeCountClientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
  }


  /**
   * Count Type TipoCreditoCountOutputType
   */

  export type TipoCreditoCountOutputType = {
    creditos: number
  }

  export type TipoCreditoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creditos?: boolean | TipoCreditoCountOutputTypeCountCreditosArgs
  }

  // Custom InputTypes
  /**
   * TipoCreditoCountOutputType without action
   */
  export type TipoCreditoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCreditoCountOutputType
     */
    select?: TipoCreditoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoCreditoCountOutputType without action
   */
  export type TipoCreditoCountOutputTypeCountCreditosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditoAsociadoWhereInput
  }


  /**
   * Count Type EstadoCreditoCountOutputType
   */

  export type EstadoCreditoCountOutputType = {
    creditos: number
    historialOrigen: number
    historialDestino: number
  }

  export type EstadoCreditoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creditos?: boolean | EstadoCreditoCountOutputTypeCountCreditosArgs
    historialOrigen?: boolean | EstadoCreditoCountOutputTypeCountHistorialOrigenArgs
    historialDestino?: boolean | EstadoCreditoCountOutputTypeCountHistorialDestinoArgs
  }

  // Custom InputTypes
  /**
   * EstadoCreditoCountOutputType without action
   */
  export type EstadoCreditoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCreditoCountOutputType
     */
    select?: EstadoCreditoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstadoCreditoCountOutputType without action
   */
  export type EstadoCreditoCountOutputTypeCountCreditosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditoAsociadoWhereInput
  }

  /**
   * EstadoCreditoCountOutputType without action
   */
  export type EstadoCreditoCountOutputTypeCountHistorialOrigenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistorialCreditoWhereInput
  }

  /**
   * EstadoCreditoCountOutputType without action
   */
  export type EstadoCreditoCountOutputTypeCountHistorialDestinoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistorialCreditoWhereInput
  }


  /**
   * Count Type MetodoPagoCountOutputType
   */

  export type MetodoPagoCountOutputType = {
    creditos: number
  }

  export type MetodoPagoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creditos?: boolean | MetodoPagoCountOutputTypeCountCreditosArgs
  }

  // Custom InputTypes
  /**
   * MetodoPagoCountOutputType without action
   */
  export type MetodoPagoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodoPagoCountOutputType
     */
    select?: MetodoPagoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MetodoPagoCountOutputType without action
   */
  export type MetodoPagoCountOutputTypeCountCreditosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditoAsociadoWhereInput
  }


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    creditos: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creditos?: boolean | ClienteCountOutputTypeCountCreditosArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountCreditosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditoAsociadoWhereInput
  }


  /**
   * Count Type AsesorCountOutputType
   */

  export type AsesorCountOutputType = {
    creditos: number
  }

  export type AsesorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creditos?: boolean | AsesorCountOutputTypeCountCreditosArgs
  }

  // Custom InputTypes
  /**
   * AsesorCountOutputType without action
   */
  export type AsesorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsesorCountOutputType
     */
    select?: AsesorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AsesorCountOutputType without action
   */
  export type AsesorCountOutputTypeCountCreditosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditoAsociadoWhereInput
  }


  /**
   * Count Type CreditoAsociadoCountOutputType
   */

  export type CreditoAsociadoCountOutputType = {
    historial: number
    webhookOutbox: number
  }

  export type CreditoAsociadoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historial?: boolean | CreditoAsociadoCountOutputTypeCountHistorialArgs
    webhookOutbox?: boolean | CreditoAsociadoCountOutputTypeCountWebhookOutboxArgs
  }

  // Custom InputTypes
  /**
   * CreditoAsociadoCountOutputType without action
   */
  export type CreditoAsociadoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditoAsociadoCountOutputType
     */
    select?: CreditoAsociadoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CreditoAsociadoCountOutputType without action
   */
  export type CreditoAsociadoCountOutputTypeCountHistorialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistorialCreditoWhereInput
  }

  /**
   * CreditoAsociadoCountOutputType without action
   */
  export type CreditoAsociadoCountOutputTypeCountWebhookOutboxArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebhookOutboxWhereInput
  }


  /**
   * Models
   */

  /**
   * Model TipoCliente
   */

  export type AggregateTipoCliente = {
    _count: TipoClienteCountAggregateOutputType | null
    _avg: TipoClienteAvgAggregateOutputType | null
    _sum: TipoClienteSumAggregateOutputType | null
    _min: TipoClienteMinAggregateOutputType | null
    _max: TipoClienteMaxAggregateOutputType | null
  }

  export type TipoClienteAvgAggregateOutputType = {
    id: number | null
  }

  export type TipoClienteSumAggregateOutputType = {
    id: number | null
  }

  export type TipoClienteMinAggregateOutputType = {
    id: number | null
    codigo: string | null
    descripcion: string | null
    activo: boolean | null
    fechaRegistro: Date | null
  }

  export type TipoClienteMaxAggregateOutputType = {
    id: number | null
    codigo: string | null
    descripcion: string | null
    activo: boolean | null
    fechaRegistro: Date | null
  }

  export type TipoClienteCountAggregateOutputType = {
    id: number
    codigo: number
    descripcion: number
    activo: number
    fechaRegistro: number
    _all: number
  }


  export type TipoClienteAvgAggregateInputType = {
    id?: true
  }

  export type TipoClienteSumAggregateInputType = {
    id?: true
  }

  export type TipoClienteMinAggregateInputType = {
    id?: true
    codigo?: true
    descripcion?: true
    activo?: true
    fechaRegistro?: true
  }

  export type TipoClienteMaxAggregateInputType = {
    id?: true
    codigo?: true
    descripcion?: true
    activo?: true
    fechaRegistro?: true
  }

  export type TipoClienteCountAggregateInputType = {
    id?: true
    codigo?: true
    descripcion?: true
    activo?: true
    fechaRegistro?: true
    _all?: true
  }

  export type TipoClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoCliente to aggregate.
     */
    where?: TipoClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoClientes to fetch.
     */
    orderBy?: TipoClienteOrderByWithRelationInput | TipoClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoClientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoClientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoClientes
    **/
    _count?: true | TipoClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoClienteMaxAggregateInputType
  }

  export type GetTipoClienteAggregateType<T extends TipoClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoCliente[P]>
      : GetScalarType<T[P], AggregateTipoCliente[P]>
  }




  export type TipoClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoClienteWhereInput
    orderBy?: TipoClienteOrderByWithAggregationInput | TipoClienteOrderByWithAggregationInput[]
    by: TipoClienteScalarFieldEnum[] | TipoClienteScalarFieldEnum
    having?: TipoClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoClienteCountAggregateInputType | true
    _avg?: TipoClienteAvgAggregateInputType
    _sum?: TipoClienteSumAggregateInputType
    _min?: TipoClienteMinAggregateInputType
    _max?: TipoClienteMaxAggregateInputType
  }

  export type TipoClienteGroupByOutputType = {
    id: number
    codigo: string
    descripcion: string
    activo: boolean
    fechaRegistro: Date
    _count: TipoClienteCountAggregateOutputType | null
    _avg: TipoClienteAvgAggregateOutputType | null
    _sum: TipoClienteSumAggregateOutputType | null
    _min: TipoClienteMinAggregateOutputType | null
    _max: TipoClienteMaxAggregateOutputType | null
  }

  type GetTipoClienteGroupByPayload<T extends TipoClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoClienteGroupByOutputType[P]>
            : GetScalarType<T[P], TipoClienteGroupByOutputType[P]>
        }
      >
    >


  export type TipoClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    descripcion?: boolean
    activo?: boolean
    fechaRegistro?: boolean
    clientes?: boolean | TipoCliente$clientesArgs<ExtArgs>
    _count?: boolean | TipoClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoCliente"]>



  export type TipoClienteSelectScalar = {
    id?: boolean
    codigo?: boolean
    descripcion?: boolean
    activo?: boolean
    fechaRegistro?: boolean
  }

  export type TipoClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "codigo" | "descripcion" | "activo" | "fechaRegistro", ExtArgs["result"]["tipoCliente"]>
  export type TipoClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientes?: boolean | TipoCliente$clientesArgs<ExtArgs>
    _count?: boolean | TipoClienteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TipoClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipoCliente"
    objects: {
      clientes: Prisma.$ClientePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      codigo: string
      descripcion: string
      activo: boolean
      fechaRegistro: Date
    }, ExtArgs["result"]["tipoCliente"]>
    composites: {}
  }

  type TipoClienteGetPayload<S extends boolean | null | undefined | TipoClienteDefaultArgs> = $Result.GetResult<Prisma.$TipoClientePayload, S>

  type TipoClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipoClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoClienteCountAggregateInputType | true
    }

  export interface TipoClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoCliente'], meta: { name: 'TipoCliente' } }
    /**
     * Find zero or one TipoCliente that matches the filter.
     * @param {TipoClienteFindUniqueArgs} args - Arguments to find a TipoCliente
     * @example
     * // Get one TipoCliente
     * const tipoCliente = await prisma.tipoCliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoClienteFindUniqueArgs>(args: SelectSubset<T, TipoClienteFindUniqueArgs<ExtArgs>>): Prisma__TipoClienteClient<$Result.GetResult<Prisma.$TipoClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TipoCliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoClienteFindUniqueOrThrowArgs} args - Arguments to find a TipoCliente
     * @example
     * // Get one TipoCliente
     * const tipoCliente = await prisma.tipoCliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoClienteClient<$Result.GetResult<Prisma.$TipoClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoCliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoClienteFindFirstArgs} args - Arguments to find a TipoCliente
     * @example
     * // Get one TipoCliente
     * const tipoCliente = await prisma.tipoCliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoClienteFindFirstArgs>(args?: SelectSubset<T, TipoClienteFindFirstArgs<ExtArgs>>): Prisma__TipoClienteClient<$Result.GetResult<Prisma.$TipoClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoCliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoClienteFindFirstOrThrowArgs} args - Arguments to find a TipoCliente
     * @example
     * // Get one TipoCliente
     * const tipoCliente = await prisma.tipoCliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoClienteClient<$Result.GetResult<Prisma.$TipoClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TipoClientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoClientes
     * const tipoClientes = await prisma.tipoCliente.findMany()
     * 
     * // Get first 10 TipoClientes
     * const tipoClientes = await prisma.tipoCliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipoClienteWithIdOnly = await prisma.tipoCliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TipoClienteFindManyArgs>(args?: SelectSubset<T, TipoClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TipoCliente.
     * @param {TipoClienteCreateArgs} args - Arguments to create a TipoCliente.
     * @example
     * // Create one TipoCliente
     * const TipoCliente = await prisma.tipoCliente.create({
     *   data: {
     *     // ... data to create a TipoCliente
     *   }
     * })
     * 
     */
    create<T extends TipoClienteCreateArgs>(args: SelectSubset<T, TipoClienteCreateArgs<ExtArgs>>): Prisma__TipoClienteClient<$Result.GetResult<Prisma.$TipoClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TipoClientes.
     * @param {TipoClienteCreateManyArgs} args - Arguments to create many TipoClientes.
     * @example
     * // Create many TipoClientes
     * const tipoCliente = await prisma.tipoCliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoClienteCreateManyArgs>(args?: SelectSubset<T, TipoClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TipoCliente.
     * @param {TipoClienteDeleteArgs} args - Arguments to delete one TipoCliente.
     * @example
     * // Delete one TipoCliente
     * const TipoCliente = await prisma.tipoCliente.delete({
     *   where: {
     *     // ... filter to delete one TipoCliente
     *   }
     * })
     * 
     */
    delete<T extends TipoClienteDeleteArgs>(args: SelectSubset<T, TipoClienteDeleteArgs<ExtArgs>>): Prisma__TipoClienteClient<$Result.GetResult<Prisma.$TipoClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TipoCliente.
     * @param {TipoClienteUpdateArgs} args - Arguments to update one TipoCliente.
     * @example
     * // Update one TipoCliente
     * const tipoCliente = await prisma.tipoCliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoClienteUpdateArgs>(args: SelectSubset<T, TipoClienteUpdateArgs<ExtArgs>>): Prisma__TipoClienteClient<$Result.GetResult<Prisma.$TipoClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TipoClientes.
     * @param {TipoClienteDeleteManyArgs} args - Arguments to filter TipoClientes to delete.
     * @example
     * // Delete a few TipoClientes
     * const { count } = await prisma.tipoCliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoClienteDeleteManyArgs>(args?: SelectSubset<T, TipoClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoClientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoClientes
     * const tipoCliente = await prisma.tipoCliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoClienteUpdateManyArgs>(args: SelectSubset<T, TipoClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TipoCliente.
     * @param {TipoClienteUpsertArgs} args - Arguments to update or create a TipoCliente.
     * @example
     * // Update or create a TipoCliente
     * const tipoCliente = await prisma.tipoCliente.upsert({
     *   create: {
     *     // ... data to create a TipoCliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoCliente we want to update
     *   }
     * })
     */
    upsert<T extends TipoClienteUpsertArgs>(args: SelectSubset<T, TipoClienteUpsertArgs<ExtArgs>>): Prisma__TipoClienteClient<$Result.GetResult<Prisma.$TipoClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TipoClientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoClienteCountArgs} args - Arguments to filter TipoClientes to count.
     * @example
     * // Count the number of TipoClientes
     * const count = await prisma.tipoCliente.count({
     *   where: {
     *     // ... the filter for the TipoClientes we want to count
     *   }
     * })
    **/
    count<T extends TipoClienteCountArgs>(
      args?: Subset<T, TipoClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoCliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TipoClienteAggregateArgs>(args: Subset<T, TipoClienteAggregateArgs>): Prisma.PrismaPromise<GetTipoClienteAggregateType<T>>

    /**
     * Group by TipoCliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TipoClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoClienteGroupByArgs['orderBy'] }
        : { orderBy?: TipoClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TipoClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipoCliente model
   */
  readonly fields: TipoClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoCliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clientes<T extends TipoCliente$clientesArgs<ExtArgs> = {}>(args?: Subset<T, TipoCliente$clientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TipoCliente model
   */
  interface TipoClienteFieldRefs {
    readonly id: FieldRef<"TipoCliente", 'Int'>
    readonly codigo: FieldRef<"TipoCliente", 'String'>
    readonly descripcion: FieldRef<"TipoCliente", 'String'>
    readonly activo: FieldRef<"TipoCliente", 'Boolean'>
    readonly fechaRegistro: FieldRef<"TipoCliente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TipoCliente findUnique
   */
  export type TipoClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCliente
     */
    select?: TipoClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoCliente
     */
    omit?: TipoClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoClienteInclude<ExtArgs> | null
    /**
     * Filter, which TipoCliente to fetch.
     */
    where: TipoClienteWhereUniqueInput
  }

  /**
   * TipoCliente findUniqueOrThrow
   */
  export type TipoClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCliente
     */
    select?: TipoClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoCliente
     */
    omit?: TipoClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoClienteInclude<ExtArgs> | null
    /**
     * Filter, which TipoCliente to fetch.
     */
    where: TipoClienteWhereUniqueInput
  }

  /**
   * TipoCliente findFirst
   */
  export type TipoClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCliente
     */
    select?: TipoClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoCliente
     */
    omit?: TipoClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoClienteInclude<ExtArgs> | null
    /**
     * Filter, which TipoCliente to fetch.
     */
    where?: TipoClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoClientes to fetch.
     */
    orderBy?: TipoClienteOrderByWithRelationInput | TipoClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoClientes.
     */
    cursor?: TipoClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoClientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoClientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoClientes.
     */
    distinct?: TipoClienteScalarFieldEnum | TipoClienteScalarFieldEnum[]
  }

  /**
   * TipoCliente findFirstOrThrow
   */
  export type TipoClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCliente
     */
    select?: TipoClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoCliente
     */
    omit?: TipoClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoClienteInclude<ExtArgs> | null
    /**
     * Filter, which TipoCliente to fetch.
     */
    where?: TipoClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoClientes to fetch.
     */
    orderBy?: TipoClienteOrderByWithRelationInput | TipoClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoClientes.
     */
    cursor?: TipoClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoClientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoClientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoClientes.
     */
    distinct?: TipoClienteScalarFieldEnum | TipoClienteScalarFieldEnum[]
  }

  /**
   * TipoCliente findMany
   */
  export type TipoClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCliente
     */
    select?: TipoClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoCliente
     */
    omit?: TipoClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoClienteInclude<ExtArgs> | null
    /**
     * Filter, which TipoClientes to fetch.
     */
    where?: TipoClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoClientes to fetch.
     */
    orderBy?: TipoClienteOrderByWithRelationInput | TipoClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoClientes.
     */
    cursor?: TipoClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoClientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoClientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoClientes.
     */
    distinct?: TipoClienteScalarFieldEnum | TipoClienteScalarFieldEnum[]
  }

  /**
   * TipoCliente create
   */
  export type TipoClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCliente
     */
    select?: TipoClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoCliente
     */
    omit?: TipoClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a TipoCliente.
     */
    data: XOR<TipoClienteCreateInput, TipoClienteUncheckedCreateInput>
  }

  /**
   * TipoCliente createMany
   */
  export type TipoClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoClientes.
     */
    data: TipoClienteCreateManyInput | TipoClienteCreateManyInput[]
  }

  /**
   * TipoCliente update
   */
  export type TipoClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCliente
     */
    select?: TipoClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoCliente
     */
    omit?: TipoClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a TipoCliente.
     */
    data: XOR<TipoClienteUpdateInput, TipoClienteUncheckedUpdateInput>
    /**
     * Choose, which TipoCliente to update.
     */
    where: TipoClienteWhereUniqueInput
  }

  /**
   * TipoCliente updateMany
   */
  export type TipoClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoClientes.
     */
    data: XOR<TipoClienteUpdateManyMutationInput, TipoClienteUncheckedUpdateManyInput>
    /**
     * Filter which TipoClientes to update
     */
    where?: TipoClienteWhereInput
    /**
     * Limit how many TipoClientes to update.
     */
    limit?: number
  }

  /**
   * TipoCliente upsert
   */
  export type TipoClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCliente
     */
    select?: TipoClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoCliente
     */
    omit?: TipoClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the TipoCliente to update in case it exists.
     */
    where: TipoClienteWhereUniqueInput
    /**
     * In case the TipoCliente found by the `where` argument doesn't exist, create a new TipoCliente with this data.
     */
    create: XOR<TipoClienteCreateInput, TipoClienteUncheckedCreateInput>
    /**
     * In case the TipoCliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoClienteUpdateInput, TipoClienteUncheckedUpdateInput>
  }

  /**
   * TipoCliente delete
   */
  export type TipoClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCliente
     */
    select?: TipoClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoCliente
     */
    omit?: TipoClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoClienteInclude<ExtArgs> | null
    /**
     * Filter which TipoCliente to delete.
     */
    where: TipoClienteWhereUniqueInput
  }

  /**
   * TipoCliente deleteMany
   */
  export type TipoClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoClientes to delete
     */
    where?: TipoClienteWhereInput
    /**
     * Limit how many TipoClientes to delete.
     */
    limit?: number
  }

  /**
   * TipoCliente.clientes
   */
  export type TipoCliente$clientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    cursor?: ClienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * TipoCliente without action
   */
  export type TipoClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCliente
     */
    select?: TipoClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoCliente
     */
    omit?: TipoClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoClienteInclude<ExtArgs> | null
  }


  /**
   * Model TipoDocumento
   */

  export type AggregateTipoDocumento = {
    _count: TipoDocumentoCountAggregateOutputType | null
    _avg: TipoDocumentoAvgAggregateOutputType | null
    _sum: TipoDocumentoSumAggregateOutputType | null
    _min: TipoDocumentoMinAggregateOutputType | null
    _max: TipoDocumentoMaxAggregateOutputType | null
  }

  export type TipoDocumentoAvgAggregateOutputType = {
    id: number | null
  }

  export type TipoDocumentoSumAggregateOutputType = {
    id: number | null
  }

  export type TipoDocumentoMinAggregateOutputType = {
    id: number | null
    codigo: string | null
    descripcion: string | null
    activo: boolean | null
    fechaRegistro: Date | null
  }

  export type TipoDocumentoMaxAggregateOutputType = {
    id: number | null
    codigo: string | null
    descripcion: string | null
    activo: boolean | null
    fechaRegistro: Date | null
  }

  export type TipoDocumentoCountAggregateOutputType = {
    id: number
    codigo: number
    descripcion: number
    activo: number
    fechaRegistro: number
    _all: number
  }


  export type TipoDocumentoAvgAggregateInputType = {
    id?: true
  }

  export type TipoDocumentoSumAggregateInputType = {
    id?: true
  }

  export type TipoDocumentoMinAggregateInputType = {
    id?: true
    codigo?: true
    descripcion?: true
    activo?: true
    fechaRegistro?: true
  }

  export type TipoDocumentoMaxAggregateInputType = {
    id?: true
    codigo?: true
    descripcion?: true
    activo?: true
    fechaRegistro?: true
  }

  export type TipoDocumentoCountAggregateInputType = {
    id?: true
    codigo?: true
    descripcion?: true
    activo?: true
    fechaRegistro?: true
    _all?: true
  }

  export type TipoDocumentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoDocumento to aggregate.
     */
    where?: TipoDocumentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoDocumentos to fetch.
     */
    orderBy?: TipoDocumentoOrderByWithRelationInput | TipoDocumentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoDocumentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoDocumentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoDocumentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoDocumentos
    **/
    _count?: true | TipoDocumentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoDocumentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoDocumentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoDocumentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoDocumentoMaxAggregateInputType
  }

  export type GetTipoDocumentoAggregateType<T extends TipoDocumentoAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoDocumento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoDocumento[P]>
      : GetScalarType<T[P], AggregateTipoDocumento[P]>
  }




  export type TipoDocumentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoDocumentoWhereInput
    orderBy?: TipoDocumentoOrderByWithAggregationInput | TipoDocumentoOrderByWithAggregationInput[]
    by: TipoDocumentoScalarFieldEnum[] | TipoDocumentoScalarFieldEnum
    having?: TipoDocumentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoDocumentoCountAggregateInputType | true
    _avg?: TipoDocumentoAvgAggregateInputType
    _sum?: TipoDocumentoSumAggregateInputType
    _min?: TipoDocumentoMinAggregateInputType
    _max?: TipoDocumentoMaxAggregateInputType
  }

  export type TipoDocumentoGroupByOutputType = {
    id: number
    codigo: string
    descripcion: string
    activo: boolean
    fechaRegistro: Date
    _count: TipoDocumentoCountAggregateOutputType | null
    _avg: TipoDocumentoAvgAggregateOutputType | null
    _sum: TipoDocumentoSumAggregateOutputType | null
    _min: TipoDocumentoMinAggregateOutputType | null
    _max: TipoDocumentoMaxAggregateOutputType | null
  }

  type GetTipoDocumentoGroupByPayload<T extends TipoDocumentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoDocumentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoDocumentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoDocumentoGroupByOutputType[P]>
            : GetScalarType<T[P], TipoDocumentoGroupByOutputType[P]>
        }
      >
    >


  export type TipoDocumentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    descripcion?: boolean
    activo?: boolean
    fechaRegistro?: boolean
    clientes?: boolean | TipoDocumento$clientesArgs<ExtArgs>
    _count?: boolean | TipoDocumentoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoDocumento"]>



  export type TipoDocumentoSelectScalar = {
    id?: boolean
    codigo?: boolean
    descripcion?: boolean
    activo?: boolean
    fechaRegistro?: boolean
  }

  export type TipoDocumentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "codigo" | "descripcion" | "activo" | "fechaRegistro", ExtArgs["result"]["tipoDocumento"]>
  export type TipoDocumentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientes?: boolean | TipoDocumento$clientesArgs<ExtArgs>
    _count?: boolean | TipoDocumentoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TipoDocumentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipoDocumento"
    objects: {
      clientes: Prisma.$ClientePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      codigo: string
      descripcion: string
      activo: boolean
      fechaRegistro: Date
    }, ExtArgs["result"]["tipoDocumento"]>
    composites: {}
  }

  type TipoDocumentoGetPayload<S extends boolean | null | undefined | TipoDocumentoDefaultArgs> = $Result.GetResult<Prisma.$TipoDocumentoPayload, S>

  type TipoDocumentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipoDocumentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoDocumentoCountAggregateInputType | true
    }

  export interface TipoDocumentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoDocumento'], meta: { name: 'TipoDocumento' } }
    /**
     * Find zero or one TipoDocumento that matches the filter.
     * @param {TipoDocumentoFindUniqueArgs} args - Arguments to find a TipoDocumento
     * @example
     * // Get one TipoDocumento
     * const tipoDocumento = await prisma.tipoDocumento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoDocumentoFindUniqueArgs>(args: SelectSubset<T, TipoDocumentoFindUniqueArgs<ExtArgs>>): Prisma__TipoDocumentoClient<$Result.GetResult<Prisma.$TipoDocumentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TipoDocumento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoDocumentoFindUniqueOrThrowArgs} args - Arguments to find a TipoDocumento
     * @example
     * // Get one TipoDocumento
     * const tipoDocumento = await prisma.tipoDocumento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoDocumentoFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoDocumentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoDocumentoClient<$Result.GetResult<Prisma.$TipoDocumentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoDocumento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoDocumentoFindFirstArgs} args - Arguments to find a TipoDocumento
     * @example
     * // Get one TipoDocumento
     * const tipoDocumento = await prisma.tipoDocumento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoDocumentoFindFirstArgs>(args?: SelectSubset<T, TipoDocumentoFindFirstArgs<ExtArgs>>): Prisma__TipoDocumentoClient<$Result.GetResult<Prisma.$TipoDocumentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoDocumento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoDocumentoFindFirstOrThrowArgs} args - Arguments to find a TipoDocumento
     * @example
     * // Get one TipoDocumento
     * const tipoDocumento = await prisma.tipoDocumento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoDocumentoFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoDocumentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoDocumentoClient<$Result.GetResult<Prisma.$TipoDocumentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TipoDocumentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoDocumentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoDocumentos
     * const tipoDocumentos = await prisma.tipoDocumento.findMany()
     * 
     * // Get first 10 TipoDocumentos
     * const tipoDocumentos = await prisma.tipoDocumento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipoDocumentoWithIdOnly = await prisma.tipoDocumento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TipoDocumentoFindManyArgs>(args?: SelectSubset<T, TipoDocumentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoDocumentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TipoDocumento.
     * @param {TipoDocumentoCreateArgs} args - Arguments to create a TipoDocumento.
     * @example
     * // Create one TipoDocumento
     * const TipoDocumento = await prisma.tipoDocumento.create({
     *   data: {
     *     // ... data to create a TipoDocumento
     *   }
     * })
     * 
     */
    create<T extends TipoDocumentoCreateArgs>(args: SelectSubset<T, TipoDocumentoCreateArgs<ExtArgs>>): Prisma__TipoDocumentoClient<$Result.GetResult<Prisma.$TipoDocumentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TipoDocumentos.
     * @param {TipoDocumentoCreateManyArgs} args - Arguments to create many TipoDocumentos.
     * @example
     * // Create many TipoDocumentos
     * const tipoDocumento = await prisma.tipoDocumento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoDocumentoCreateManyArgs>(args?: SelectSubset<T, TipoDocumentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TipoDocumento.
     * @param {TipoDocumentoDeleteArgs} args - Arguments to delete one TipoDocumento.
     * @example
     * // Delete one TipoDocumento
     * const TipoDocumento = await prisma.tipoDocumento.delete({
     *   where: {
     *     // ... filter to delete one TipoDocumento
     *   }
     * })
     * 
     */
    delete<T extends TipoDocumentoDeleteArgs>(args: SelectSubset<T, TipoDocumentoDeleteArgs<ExtArgs>>): Prisma__TipoDocumentoClient<$Result.GetResult<Prisma.$TipoDocumentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TipoDocumento.
     * @param {TipoDocumentoUpdateArgs} args - Arguments to update one TipoDocumento.
     * @example
     * // Update one TipoDocumento
     * const tipoDocumento = await prisma.tipoDocumento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoDocumentoUpdateArgs>(args: SelectSubset<T, TipoDocumentoUpdateArgs<ExtArgs>>): Prisma__TipoDocumentoClient<$Result.GetResult<Prisma.$TipoDocumentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TipoDocumentos.
     * @param {TipoDocumentoDeleteManyArgs} args - Arguments to filter TipoDocumentos to delete.
     * @example
     * // Delete a few TipoDocumentos
     * const { count } = await prisma.tipoDocumento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoDocumentoDeleteManyArgs>(args?: SelectSubset<T, TipoDocumentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoDocumentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoDocumentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoDocumentos
     * const tipoDocumento = await prisma.tipoDocumento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoDocumentoUpdateManyArgs>(args: SelectSubset<T, TipoDocumentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TipoDocumento.
     * @param {TipoDocumentoUpsertArgs} args - Arguments to update or create a TipoDocumento.
     * @example
     * // Update or create a TipoDocumento
     * const tipoDocumento = await prisma.tipoDocumento.upsert({
     *   create: {
     *     // ... data to create a TipoDocumento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoDocumento we want to update
     *   }
     * })
     */
    upsert<T extends TipoDocumentoUpsertArgs>(args: SelectSubset<T, TipoDocumentoUpsertArgs<ExtArgs>>): Prisma__TipoDocumentoClient<$Result.GetResult<Prisma.$TipoDocumentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TipoDocumentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoDocumentoCountArgs} args - Arguments to filter TipoDocumentos to count.
     * @example
     * // Count the number of TipoDocumentos
     * const count = await prisma.tipoDocumento.count({
     *   where: {
     *     // ... the filter for the TipoDocumentos we want to count
     *   }
     * })
    **/
    count<T extends TipoDocumentoCountArgs>(
      args?: Subset<T, TipoDocumentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoDocumentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoDocumento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoDocumentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TipoDocumentoAggregateArgs>(args: Subset<T, TipoDocumentoAggregateArgs>): Prisma.PrismaPromise<GetTipoDocumentoAggregateType<T>>

    /**
     * Group by TipoDocumento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoDocumentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TipoDocumentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoDocumentoGroupByArgs['orderBy'] }
        : { orderBy?: TipoDocumentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TipoDocumentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoDocumentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipoDocumento model
   */
  readonly fields: TipoDocumentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoDocumento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoDocumentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clientes<T extends TipoDocumento$clientesArgs<ExtArgs> = {}>(args?: Subset<T, TipoDocumento$clientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TipoDocumento model
   */
  interface TipoDocumentoFieldRefs {
    readonly id: FieldRef<"TipoDocumento", 'Int'>
    readonly codigo: FieldRef<"TipoDocumento", 'String'>
    readonly descripcion: FieldRef<"TipoDocumento", 'String'>
    readonly activo: FieldRef<"TipoDocumento", 'Boolean'>
    readonly fechaRegistro: FieldRef<"TipoDocumento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TipoDocumento findUnique
   */
  export type TipoDocumentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDocumento
     */
    select?: TipoDocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDocumento
     */
    omit?: TipoDocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoDocumentoInclude<ExtArgs> | null
    /**
     * Filter, which TipoDocumento to fetch.
     */
    where: TipoDocumentoWhereUniqueInput
  }

  /**
   * TipoDocumento findUniqueOrThrow
   */
  export type TipoDocumentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDocumento
     */
    select?: TipoDocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDocumento
     */
    omit?: TipoDocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoDocumentoInclude<ExtArgs> | null
    /**
     * Filter, which TipoDocumento to fetch.
     */
    where: TipoDocumentoWhereUniqueInput
  }

  /**
   * TipoDocumento findFirst
   */
  export type TipoDocumentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDocumento
     */
    select?: TipoDocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDocumento
     */
    omit?: TipoDocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoDocumentoInclude<ExtArgs> | null
    /**
     * Filter, which TipoDocumento to fetch.
     */
    where?: TipoDocumentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoDocumentos to fetch.
     */
    orderBy?: TipoDocumentoOrderByWithRelationInput | TipoDocumentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoDocumentos.
     */
    cursor?: TipoDocumentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoDocumentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoDocumentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoDocumentos.
     */
    distinct?: TipoDocumentoScalarFieldEnum | TipoDocumentoScalarFieldEnum[]
  }

  /**
   * TipoDocumento findFirstOrThrow
   */
  export type TipoDocumentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDocumento
     */
    select?: TipoDocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDocumento
     */
    omit?: TipoDocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoDocumentoInclude<ExtArgs> | null
    /**
     * Filter, which TipoDocumento to fetch.
     */
    where?: TipoDocumentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoDocumentos to fetch.
     */
    orderBy?: TipoDocumentoOrderByWithRelationInput | TipoDocumentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoDocumentos.
     */
    cursor?: TipoDocumentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoDocumentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoDocumentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoDocumentos.
     */
    distinct?: TipoDocumentoScalarFieldEnum | TipoDocumentoScalarFieldEnum[]
  }

  /**
   * TipoDocumento findMany
   */
  export type TipoDocumentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDocumento
     */
    select?: TipoDocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDocumento
     */
    omit?: TipoDocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoDocumentoInclude<ExtArgs> | null
    /**
     * Filter, which TipoDocumentos to fetch.
     */
    where?: TipoDocumentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoDocumentos to fetch.
     */
    orderBy?: TipoDocumentoOrderByWithRelationInput | TipoDocumentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoDocumentos.
     */
    cursor?: TipoDocumentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoDocumentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoDocumentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoDocumentos.
     */
    distinct?: TipoDocumentoScalarFieldEnum | TipoDocumentoScalarFieldEnum[]
  }

  /**
   * TipoDocumento create
   */
  export type TipoDocumentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDocumento
     */
    select?: TipoDocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDocumento
     */
    omit?: TipoDocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoDocumentoInclude<ExtArgs> | null
    /**
     * The data needed to create a TipoDocumento.
     */
    data: XOR<TipoDocumentoCreateInput, TipoDocumentoUncheckedCreateInput>
  }

  /**
   * TipoDocumento createMany
   */
  export type TipoDocumentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoDocumentos.
     */
    data: TipoDocumentoCreateManyInput | TipoDocumentoCreateManyInput[]
  }

  /**
   * TipoDocumento update
   */
  export type TipoDocumentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDocumento
     */
    select?: TipoDocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDocumento
     */
    omit?: TipoDocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoDocumentoInclude<ExtArgs> | null
    /**
     * The data needed to update a TipoDocumento.
     */
    data: XOR<TipoDocumentoUpdateInput, TipoDocumentoUncheckedUpdateInput>
    /**
     * Choose, which TipoDocumento to update.
     */
    where: TipoDocumentoWhereUniqueInput
  }

  /**
   * TipoDocumento updateMany
   */
  export type TipoDocumentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoDocumentos.
     */
    data: XOR<TipoDocumentoUpdateManyMutationInput, TipoDocumentoUncheckedUpdateManyInput>
    /**
     * Filter which TipoDocumentos to update
     */
    where?: TipoDocumentoWhereInput
    /**
     * Limit how many TipoDocumentos to update.
     */
    limit?: number
  }

  /**
   * TipoDocumento upsert
   */
  export type TipoDocumentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDocumento
     */
    select?: TipoDocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDocumento
     */
    omit?: TipoDocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoDocumentoInclude<ExtArgs> | null
    /**
     * The filter to search for the TipoDocumento to update in case it exists.
     */
    where: TipoDocumentoWhereUniqueInput
    /**
     * In case the TipoDocumento found by the `where` argument doesn't exist, create a new TipoDocumento with this data.
     */
    create: XOR<TipoDocumentoCreateInput, TipoDocumentoUncheckedCreateInput>
    /**
     * In case the TipoDocumento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoDocumentoUpdateInput, TipoDocumentoUncheckedUpdateInput>
  }

  /**
   * TipoDocumento delete
   */
  export type TipoDocumentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDocumento
     */
    select?: TipoDocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDocumento
     */
    omit?: TipoDocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoDocumentoInclude<ExtArgs> | null
    /**
     * Filter which TipoDocumento to delete.
     */
    where: TipoDocumentoWhereUniqueInput
  }

  /**
   * TipoDocumento deleteMany
   */
  export type TipoDocumentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoDocumentos to delete
     */
    where?: TipoDocumentoWhereInput
    /**
     * Limit how many TipoDocumentos to delete.
     */
    limit?: number
  }

  /**
   * TipoDocumento.clientes
   */
  export type TipoDocumento$clientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    cursor?: ClienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * TipoDocumento without action
   */
  export type TipoDocumentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoDocumento
     */
    select?: TipoDocumentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoDocumento
     */
    omit?: TipoDocumentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoDocumentoInclude<ExtArgs> | null
  }


  /**
   * Model TipoCredito
   */

  export type AggregateTipoCredito = {
    _count: TipoCreditoCountAggregateOutputType | null
    _avg: TipoCreditoAvgAggregateOutputType | null
    _sum: TipoCreditoSumAggregateOutputType | null
    _min: TipoCreditoMinAggregateOutputType | null
    _max: TipoCreditoMaxAggregateOutputType | null
  }

  export type TipoCreditoAvgAggregateOutputType = {
    id: number | null
  }

  export type TipoCreditoSumAggregateOutputType = {
    id: number | null
  }

  export type TipoCreditoMinAggregateOutputType = {
    id: number | null
    codigo: string | null
    descripcion: string | null
    activo: boolean | null
    fechaRegistro: Date | null
  }

  export type TipoCreditoMaxAggregateOutputType = {
    id: number | null
    codigo: string | null
    descripcion: string | null
    activo: boolean | null
    fechaRegistro: Date | null
  }

  export type TipoCreditoCountAggregateOutputType = {
    id: number
    codigo: number
    descripcion: number
    activo: number
    fechaRegistro: number
    _all: number
  }


  export type TipoCreditoAvgAggregateInputType = {
    id?: true
  }

  export type TipoCreditoSumAggregateInputType = {
    id?: true
  }

  export type TipoCreditoMinAggregateInputType = {
    id?: true
    codigo?: true
    descripcion?: true
    activo?: true
    fechaRegistro?: true
  }

  export type TipoCreditoMaxAggregateInputType = {
    id?: true
    codigo?: true
    descripcion?: true
    activo?: true
    fechaRegistro?: true
  }

  export type TipoCreditoCountAggregateInputType = {
    id?: true
    codigo?: true
    descripcion?: true
    activo?: true
    fechaRegistro?: true
    _all?: true
  }

  export type TipoCreditoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoCredito to aggregate.
     */
    where?: TipoCreditoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoCreditos to fetch.
     */
    orderBy?: TipoCreditoOrderByWithRelationInput | TipoCreditoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoCreditoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoCreditos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoCreditos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoCreditos
    **/
    _count?: true | TipoCreditoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoCreditoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoCreditoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoCreditoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoCreditoMaxAggregateInputType
  }

  export type GetTipoCreditoAggregateType<T extends TipoCreditoAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoCredito]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoCredito[P]>
      : GetScalarType<T[P], AggregateTipoCredito[P]>
  }




  export type TipoCreditoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoCreditoWhereInput
    orderBy?: TipoCreditoOrderByWithAggregationInput | TipoCreditoOrderByWithAggregationInput[]
    by: TipoCreditoScalarFieldEnum[] | TipoCreditoScalarFieldEnum
    having?: TipoCreditoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoCreditoCountAggregateInputType | true
    _avg?: TipoCreditoAvgAggregateInputType
    _sum?: TipoCreditoSumAggregateInputType
    _min?: TipoCreditoMinAggregateInputType
    _max?: TipoCreditoMaxAggregateInputType
  }

  export type TipoCreditoGroupByOutputType = {
    id: number
    codigo: string
    descripcion: string
    activo: boolean
    fechaRegistro: Date
    _count: TipoCreditoCountAggregateOutputType | null
    _avg: TipoCreditoAvgAggregateOutputType | null
    _sum: TipoCreditoSumAggregateOutputType | null
    _min: TipoCreditoMinAggregateOutputType | null
    _max: TipoCreditoMaxAggregateOutputType | null
  }

  type GetTipoCreditoGroupByPayload<T extends TipoCreditoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoCreditoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoCreditoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoCreditoGroupByOutputType[P]>
            : GetScalarType<T[P], TipoCreditoGroupByOutputType[P]>
        }
      >
    >


  export type TipoCreditoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    descripcion?: boolean
    activo?: boolean
    fechaRegistro?: boolean
    creditos?: boolean | TipoCredito$creditosArgs<ExtArgs>
    _count?: boolean | TipoCreditoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoCredito"]>



  export type TipoCreditoSelectScalar = {
    id?: boolean
    codigo?: boolean
    descripcion?: boolean
    activo?: boolean
    fechaRegistro?: boolean
  }

  export type TipoCreditoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "codigo" | "descripcion" | "activo" | "fechaRegistro", ExtArgs["result"]["tipoCredito"]>
  export type TipoCreditoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creditos?: boolean | TipoCredito$creditosArgs<ExtArgs>
    _count?: boolean | TipoCreditoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TipoCreditoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipoCredito"
    objects: {
      creditos: Prisma.$CreditoAsociadoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      codigo: string
      descripcion: string
      activo: boolean
      fechaRegistro: Date
    }, ExtArgs["result"]["tipoCredito"]>
    composites: {}
  }

  type TipoCreditoGetPayload<S extends boolean | null | undefined | TipoCreditoDefaultArgs> = $Result.GetResult<Prisma.$TipoCreditoPayload, S>

  type TipoCreditoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipoCreditoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoCreditoCountAggregateInputType | true
    }

  export interface TipoCreditoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoCredito'], meta: { name: 'TipoCredito' } }
    /**
     * Find zero or one TipoCredito that matches the filter.
     * @param {TipoCreditoFindUniqueArgs} args - Arguments to find a TipoCredito
     * @example
     * // Get one TipoCredito
     * const tipoCredito = await prisma.tipoCredito.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoCreditoFindUniqueArgs>(args: SelectSubset<T, TipoCreditoFindUniqueArgs<ExtArgs>>): Prisma__TipoCreditoClient<$Result.GetResult<Prisma.$TipoCreditoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TipoCredito that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoCreditoFindUniqueOrThrowArgs} args - Arguments to find a TipoCredito
     * @example
     * // Get one TipoCredito
     * const tipoCredito = await prisma.tipoCredito.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoCreditoFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoCreditoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoCreditoClient<$Result.GetResult<Prisma.$TipoCreditoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoCredito that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoCreditoFindFirstArgs} args - Arguments to find a TipoCredito
     * @example
     * // Get one TipoCredito
     * const tipoCredito = await prisma.tipoCredito.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoCreditoFindFirstArgs>(args?: SelectSubset<T, TipoCreditoFindFirstArgs<ExtArgs>>): Prisma__TipoCreditoClient<$Result.GetResult<Prisma.$TipoCreditoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoCredito that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoCreditoFindFirstOrThrowArgs} args - Arguments to find a TipoCredito
     * @example
     * // Get one TipoCredito
     * const tipoCredito = await prisma.tipoCredito.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoCreditoFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoCreditoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoCreditoClient<$Result.GetResult<Prisma.$TipoCreditoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TipoCreditos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoCreditoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoCreditos
     * const tipoCreditos = await prisma.tipoCredito.findMany()
     * 
     * // Get first 10 TipoCreditos
     * const tipoCreditos = await prisma.tipoCredito.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipoCreditoWithIdOnly = await prisma.tipoCredito.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TipoCreditoFindManyArgs>(args?: SelectSubset<T, TipoCreditoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoCreditoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TipoCredito.
     * @param {TipoCreditoCreateArgs} args - Arguments to create a TipoCredito.
     * @example
     * // Create one TipoCredito
     * const TipoCredito = await prisma.tipoCredito.create({
     *   data: {
     *     // ... data to create a TipoCredito
     *   }
     * })
     * 
     */
    create<T extends TipoCreditoCreateArgs>(args: SelectSubset<T, TipoCreditoCreateArgs<ExtArgs>>): Prisma__TipoCreditoClient<$Result.GetResult<Prisma.$TipoCreditoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TipoCreditos.
     * @param {TipoCreditoCreateManyArgs} args - Arguments to create many TipoCreditos.
     * @example
     * // Create many TipoCreditos
     * const tipoCredito = await prisma.tipoCredito.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoCreditoCreateManyArgs>(args?: SelectSubset<T, TipoCreditoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TipoCredito.
     * @param {TipoCreditoDeleteArgs} args - Arguments to delete one TipoCredito.
     * @example
     * // Delete one TipoCredito
     * const TipoCredito = await prisma.tipoCredito.delete({
     *   where: {
     *     // ... filter to delete one TipoCredito
     *   }
     * })
     * 
     */
    delete<T extends TipoCreditoDeleteArgs>(args: SelectSubset<T, TipoCreditoDeleteArgs<ExtArgs>>): Prisma__TipoCreditoClient<$Result.GetResult<Prisma.$TipoCreditoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TipoCredito.
     * @param {TipoCreditoUpdateArgs} args - Arguments to update one TipoCredito.
     * @example
     * // Update one TipoCredito
     * const tipoCredito = await prisma.tipoCredito.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoCreditoUpdateArgs>(args: SelectSubset<T, TipoCreditoUpdateArgs<ExtArgs>>): Prisma__TipoCreditoClient<$Result.GetResult<Prisma.$TipoCreditoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TipoCreditos.
     * @param {TipoCreditoDeleteManyArgs} args - Arguments to filter TipoCreditos to delete.
     * @example
     * // Delete a few TipoCreditos
     * const { count } = await prisma.tipoCredito.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoCreditoDeleteManyArgs>(args?: SelectSubset<T, TipoCreditoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoCreditos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoCreditoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoCreditos
     * const tipoCredito = await prisma.tipoCredito.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoCreditoUpdateManyArgs>(args: SelectSubset<T, TipoCreditoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TipoCredito.
     * @param {TipoCreditoUpsertArgs} args - Arguments to update or create a TipoCredito.
     * @example
     * // Update or create a TipoCredito
     * const tipoCredito = await prisma.tipoCredito.upsert({
     *   create: {
     *     // ... data to create a TipoCredito
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoCredito we want to update
     *   }
     * })
     */
    upsert<T extends TipoCreditoUpsertArgs>(args: SelectSubset<T, TipoCreditoUpsertArgs<ExtArgs>>): Prisma__TipoCreditoClient<$Result.GetResult<Prisma.$TipoCreditoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TipoCreditos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoCreditoCountArgs} args - Arguments to filter TipoCreditos to count.
     * @example
     * // Count the number of TipoCreditos
     * const count = await prisma.tipoCredito.count({
     *   where: {
     *     // ... the filter for the TipoCreditos we want to count
     *   }
     * })
    **/
    count<T extends TipoCreditoCountArgs>(
      args?: Subset<T, TipoCreditoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoCreditoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoCredito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoCreditoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TipoCreditoAggregateArgs>(args: Subset<T, TipoCreditoAggregateArgs>): Prisma.PrismaPromise<GetTipoCreditoAggregateType<T>>

    /**
     * Group by TipoCredito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoCreditoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TipoCreditoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoCreditoGroupByArgs['orderBy'] }
        : { orderBy?: TipoCreditoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TipoCreditoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoCreditoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipoCredito model
   */
  readonly fields: TipoCreditoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoCredito.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoCreditoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creditos<T extends TipoCredito$creditosArgs<ExtArgs> = {}>(args?: Subset<T, TipoCredito$creditosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditoAsociadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TipoCredito model
   */
  interface TipoCreditoFieldRefs {
    readonly id: FieldRef<"TipoCredito", 'Int'>
    readonly codigo: FieldRef<"TipoCredito", 'String'>
    readonly descripcion: FieldRef<"TipoCredito", 'String'>
    readonly activo: FieldRef<"TipoCredito", 'Boolean'>
    readonly fechaRegistro: FieldRef<"TipoCredito", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TipoCredito findUnique
   */
  export type TipoCreditoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCredito
     */
    select?: TipoCreditoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoCredito
     */
    omit?: TipoCreditoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoCreditoInclude<ExtArgs> | null
    /**
     * Filter, which TipoCredito to fetch.
     */
    where: TipoCreditoWhereUniqueInput
  }

  /**
   * TipoCredito findUniqueOrThrow
   */
  export type TipoCreditoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCredito
     */
    select?: TipoCreditoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoCredito
     */
    omit?: TipoCreditoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoCreditoInclude<ExtArgs> | null
    /**
     * Filter, which TipoCredito to fetch.
     */
    where: TipoCreditoWhereUniqueInput
  }

  /**
   * TipoCredito findFirst
   */
  export type TipoCreditoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCredito
     */
    select?: TipoCreditoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoCredito
     */
    omit?: TipoCreditoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoCreditoInclude<ExtArgs> | null
    /**
     * Filter, which TipoCredito to fetch.
     */
    where?: TipoCreditoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoCreditos to fetch.
     */
    orderBy?: TipoCreditoOrderByWithRelationInput | TipoCreditoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoCreditos.
     */
    cursor?: TipoCreditoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoCreditos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoCreditos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoCreditos.
     */
    distinct?: TipoCreditoScalarFieldEnum | TipoCreditoScalarFieldEnum[]
  }

  /**
   * TipoCredito findFirstOrThrow
   */
  export type TipoCreditoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCredito
     */
    select?: TipoCreditoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoCredito
     */
    omit?: TipoCreditoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoCreditoInclude<ExtArgs> | null
    /**
     * Filter, which TipoCredito to fetch.
     */
    where?: TipoCreditoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoCreditos to fetch.
     */
    orderBy?: TipoCreditoOrderByWithRelationInput | TipoCreditoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoCreditos.
     */
    cursor?: TipoCreditoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoCreditos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoCreditos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoCreditos.
     */
    distinct?: TipoCreditoScalarFieldEnum | TipoCreditoScalarFieldEnum[]
  }

  /**
   * TipoCredito findMany
   */
  export type TipoCreditoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCredito
     */
    select?: TipoCreditoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoCredito
     */
    omit?: TipoCreditoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoCreditoInclude<ExtArgs> | null
    /**
     * Filter, which TipoCreditos to fetch.
     */
    where?: TipoCreditoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoCreditos to fetch.
     */
    orderBy?: TipoCreditoOrderByWithRelationInput | TipoCreditoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoCreditos.
     */
    cursor?: TipoCreditoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoCreditos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoCreditos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoCreditos.
     */
    distinct?: TipoCreditoScalarFieldEnum | TipoCreditoScalarFieldEnum[]
  }

  /**
   * TipoCredito create
   */
  export type TipoCreditoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCredito
     */
    select?: TipoCreditoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoCredito
     */
    omit?: TipoCreditoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoCreditoInclude<ExtArgs> | null
    /**
     * The data needed to create a TipoCredito.
     */
    data: XOR<TipoCreditoCreateInput, TipoCreditoUncheckedCreateInput>
  }

  /**
   * TipoCredito createMany
   */
  export type TipoCreditoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoCreditos.
     */
    data: TipoCreditoCreateManyInput | TipoCreditoCreateManyInput[]
  }

  /**
   * TipoCredito update
   */
  export type TipoCreditoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCredito
     */
    select?: TipoCreditoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoCredito
     */
    omit?: TipoCreditoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoCreditoInclude<ExtArgs> | null
    /**
     * The data needed to update a TipoCredito.
     */
    data: XOR<TipoCreditoUpdateInput, TipoCreditoUncheckedUpdateInput>
    /**
     * Choose, which TipoCredito to update.
     */
    where: TipoCreditoWhereUniqueInput
  }

  /**
   * TipoCredito updateMany
   */
  export type TipoCreditoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoCreditos.
     */
    data: XOR<TipoCreditoUpdateManyMutationInput, TipoCreditoUncheckedUpdateManyInput>
    /**
     * Filter which TipoCreditos to update
     */
    where?: TipoCreditoWhereInput
    /**
     * Limit how many TipoCreditos to update.
     */
    limit?: number
  }

  /**
   * TipoCredito upsert
   */
  export type TipoCreditoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCredito
     */
    select?: TipoCreditoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoCredito
     */
    omit?: TipoCreditoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoCreditoInclude<ExtArgs> | null
    /**
     * The filter to search for the TipoCredito to update in case it exists.
     */
    where: TipoCreditoWhereUniqueInput
    /**
     * In case the TipoCredito found by the `where` argument doesn't exist, create a new TipoCredito with this data.
     */
    create: XOR<TipoCreditoCreateInput, TipoCreditoUncheckedCreateInput>
    /**
     * In case the TipoCredito was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoCreditoUpdateInput, TipoCreditoUncheckedUpdateInput>
  }

  /**
   * TipoCredito delete
   */
  export type TipoCreditoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCredito
     */
    select?: TipoCreditoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoCredito
     */
    omit?: TipoCreditoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoCreditoInclude<ExtArgs> | null
    /**
     * Filter which TipoCredito to delete.
     */
    where: TipoCreditoWhereUniqueInput
  }

  /**
   * TipoCredito deleteMany
   */
  export type TipoCreditoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoCreditos to delete
     */
    where?: TipoCreditoWhereInput
    /**
     * Limit how many TipoCreditos to delete.
     */
    limit?: number
  }

  /**
   * TipoCredito.creditos
   */
  export type TipoCredito$creditosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditoAsociado
     */
    select?: CreditoAsociadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditoAsociado
     */
    omit?: CreditoAsociadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditoAsociadoInclude<ExtArgs> | null
    where?: CreditoAsociadoWhereInput
    orderBy?: CreditoAsociadoOrderByWithRelationInput | CreditoAsociadoOrderByWithRelationInput[]
    cursor?: CreditoAsociadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreditoAsociadoScalarFieldEnum | CreditoAsociadoScalarFieldEnum[]
  }

  /**
   * TipoCredito without action
   */
  export type TipoCreditoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoCredito
     */
    select?: TipoCreditoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoCredito
     */
    omit?: TipoCreditoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoCreditoInclude<ExtArgs> | null
  }


  /**
   * Model EstadoCredito
   */

  export type AggregateEstadoCredito = {
    _count: EstadoCreditoCountAggregateOutputType | null
    _avg: EstadoCreditoAvgAggregateOutputType | null
    _sum: EstadoCreditoSumAggregateOutputType | null
    _min: EstadoCreditoMinAggregateOutputType | null
    _max: EstadoCreditoMaxAggregateOutputType | null
  }

  export type EstadoCreditoAvgAggregateOutputType = {
    id: number | null
  }

  export type EstadoCreditoSumAggregateOutputType = {
    id: number | null
  }

  export type EstadoCreditoMinAggregateOutputType = {
    id: number | null
    codigo: string | null
    descripcion: string | null
    activo: boolean | null
    fechaRegistro: Date | null
  }

  export type EstadoCreditoMaxAggregateOutputType = {
    id: number | null
    codigo: string | null
    descripcion: string | null
    activo: boolean | null
    fechaRegistro: Date | null
  }

  export type EstadoCreditoCountAggregateOutputType = {
    id: number
    codigo: number
    descripcion: number
    activo: number
    fechaRegistro: number
    _all: number
  }


  export type EstadoCreditoAvgAggregateInputType = {
    id?: true
  }

  export type EstadoCreditoSumAggregateInputType = {
    id?: true
  }

  export type EstadoCreditoMinAggregateInputType = {
    id?: true
    codigo?: true
    descripcion?: true
    activo?: true
    fechaRegistro?: true
  }

  export type EstadoCreditoMaxAggregateInputType = {
    id?: true
    codigo?: true
    descripcion?: true
    activo?: true
    fechaRegistro?: true
  }

  export type EstadoCreditoCountAggregateInputType = {
    id?: true
    codigo?: true
    descripcion?: true
    activo?: true
    fechaRegistro?: true
    _all?: true
  }

  export type EstadoCreditoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EstadoCredito to aggregate.
     */
    where?: EstadoCreditoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstadoCreditos to fetch.
     */
    orderBy?: EstadoCreditoOrderByWithRelationInput | EstadoCreditoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstadoCreditoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstadoCreditos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstadoCreditos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EstadoCreditos
    **/
    _count?: true | EstadoCreditoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstadoCreditoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstadoCreditoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstadoCreditoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstadoCreditoMaxAggregateInputType
  }

  export type GetEstadoCreditoAggregateType<T extends EstadoCreditoAggregateArgs> = {
        [P in keyof T & keyof AggregateEstadoCredito]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstadoCredito[P]>
      : GetScalarType<T[P], AggregateEstadoCredito[P]>
  }




  export type EstadoCreditoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstadoCreditoWhereInput
    orderBy?: EstadoCreditoOrderByWithAggregationInput | EstadoCreditoOrderByWithAggregationInput[]
    by: EstadoCreditoScalarFieldEnum[] | EstadoCreditoScalarFieldEnum
    having?: EstadoCreditoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstadoCreditoCountAggregateInputType | true
    _avg?: EstadoCreditoAvgAggregateInputType
    _sum?: EstadoCreditoSumAggregateInputType
    _min?: EstadoCreditoMinAggregateInputType
    _max?: EstadoCreditoMaxAggregateInputType
  }

  export type EstadoCreditoGroupByOutputType = {
    id: number
    codigo: string
    descripcion: string
    activo: boolean
    fechaRegistro: Date
    _count: EstadoCreditoCountAggregateOutputType | null
    _avg: EstadoCreditoAvgAggregateOutputType | null
    _sum: EstadoCreditoSumAggregateOutputType | null
    _min: EstadoCreditoMinAggregateOutputType | null
    _max: EstadoCreditoMaxAggregateOutputType | null
  }

  type GetEstadoCreditoGroupByPayload<T extends EstadoCreditoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstadoCreditoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstadoCreditoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstadoCreditoGroupByOutputType[P]>
            : GetScalarType<T[P], EstadoCreditoGroupByOutputType[P]>
        }
      >
    >


  export type EstadoCreditoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    descripcion?: boolean
    activo?: boolean
    fechaRegistro?: boolean
    creditos?: boolean | EstadoCredito$creditosArgs<ExtArgs>
    historialOrigen?: boolean | EstadoCredito$historialOrigenArgs<ExtArgs>
    historialDestino?: boolean | EstadoCredito$historialDestinoArgs<ExtArgs>
    _count?: boolean | EstadoCreditoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estadoCredito"]>



  export type EstadoCreditoSelectScalar = {
    id?: boolean
    codigo?: boolean
    descripcion?: boolean
    activo?: boolean
    fechaRegistro?: boolean
  }

  export type EstadoCreditoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "codigo" | "descripcion" | "activo" | "fechaRegistro", ExtArgs["result"]["estadoCredito"]>
  export type EstadoCreditoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creditos?: boolean | EstadoCredito$creditosArgs<ExtArgs>
    historialOrigen?: boolean | EstadoCredito$historialOrigenArgs<ExtArgs>
    historialDestino?: boolean | EstadoCredito$historialDestinoArgs<ExtArgs>
    _count?: boolean | EstadoCreditoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EstadoCreditoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EstadoCredito"
    objects: {
      creditos: Prisma.$CreditoAsociadoPayload<ExtArgs>[]
      historialOrigen: Prisma.$HistorialCreditoPayload<ExtArgs>[]
      historialDestino: Prisma.$HistorialCreditoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      codigo: string
      descripcion: string
      activo: boolean
      fechaRegistro: Date
    }, ExtArgs["result"]["estadoCredito"]>
    composites: {}
  }

  type EstadoCreditoGetPayload<S extends boolean | null | undefined | EstadoCreditoDefaultArgs> = $Result.GetResult<Prisma.$EstadoCreditoPayload, S>

  type EstadoCreditoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstadoCreditoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstadoCreditoCountAggregateInputType | true
    }

  export interface EstadoCreditoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EstadoCredito'], meta: { name: 'EstadoCredito' } }
    /**
     * Find zero or one EstadoCredito that matches the filter.
     * @param {EstadoCreditoFindUniqueArgs} args - Arguments to find a EstadoCredito
     * @example
     * // Get one EstadoCredito
     * const estadoCredito = await prisma.estadoCredito.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstadoCreditoFindUniqueArgs>(args: SelectSubset<T, EstadoCreditoFindUniqueArgs<ExtArgs>>): Prisma__EstadoCreditoClient<$Result.GetResult<Prisma.$EstadoCreditoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EstadoCredito that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstadoCreditoFindUniqueOrThrowArgs} args - Arguments to find a EstadoCredito
     * @example
     * // Get one EstadoCredito
     * const estadoCredito = await prisma.estadoCredito.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstadoCreditoFindUniqueOrThrowArgs>(args: SelectSubset<T, EstadoCreditoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstadoCreditoClient<$Result.GetResult<Prisma.$EstadoCreditoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EstadoCredito that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoCreditoFindFirstArgs} args - Arguments to find a EstadoCredito
     * @example
     * // Get one EstadoCredito
     * const estadoCredito = await prisma.estadoCredito.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstadoCreditoFindFirstArgs>(args?: SelectSubset<T, EstadoCreditoFindFirstArgs<ExtArgs>>): Prisma__EstadoCreditoClient<$Result.GetResult<Prisma.$EstadoCreditoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EstadoCredito that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoCreditoFindFirstOrThrowArgs} args - Arguments to find a EstadoCredito
     * @example
     * // Get one EstadoCredito
     * const estadoCredito = await prisma.estadoCredito.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstadoCreditoFindFirstOrThrowArgs>(args?: SelectSubset<T, EstadoCreditoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstadoCreditoClient<$Result.GetResult<Prisma.$EstadoCreditoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EstadoCreditos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoCreditoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EstadoCreditos
     * const estadoCreditos = await prisma.estadoCredito.findMany()
     * 
     * // Get first 10 EstadoCreditos
     * const estadoCreditos = await prisma.estadoCredito.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estadoCreditoWithIdOnly = await prisma.estadoCredito.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EstadoCreditoFindManyArgs>(args?: SelectSubset<T, EstadoCreditoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstadoCreditoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EstadoCredito.
     * @param {EstadoCreditoCreateArgs} args - Arguments to create a EstadoCredito.
     * @example
     * // Create one EstadoCredito
     * const EstadoCredito = await prisma.estadoCredito.create({
     *   data: {
     *     // ... data to create a EstadoCredito
     *   }
     * })
     * 
     */
    create<T extends EstadoCreditoCreateArgs>(args: SelectSubset<T, EstadoCreditoCreateArgs<ExtArgs>>): Prisma__EstadoCreditoClient<$Result.GetResult<Prisma.$EstadoCreditoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EstadoCreditos.
     * @param {EstadoCreditoCreateManyArgs} args - Arguments to create many EstadoCreditos.
     * @example
     * // Create many EstadoCreditos
     * const estadoCredito = await prisma.estadoCredito.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstadoCreditoCreateManyArgs>(args?: SelectSubset<T, EstadoCreditoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EstadoCredito.
     * @param {EstadoCreditoDeleteArgs} args - Arguments to delete one EstadoCredito.
     * @example
     * // Delete one EstadoCredito
     * const EstadoCredito = await prisma.estadoCredito.delete({
     *   where: {
     *     // ... filter to delete one EstadoCredito
     *   }
     * })
     * 
     */
    delete<T extends EstadoCreditoDeleteArgs>(args: SelectSubset<T, EstadoCreditoDeleteArgs<ExtArgs>>): Prisma__EstadoCreditoClient<$Result.GetResult<Prisma.$EstadoCreditoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EstadoCredito.
     * @param {EstadoCreditoUpdateArgs} args - Arguments to update one EstadoCredito.
     * @example
     * // Update one EstadoCredito
     * const estadoCredito = await prisma.estadoCredito.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstadoCreditoUpdateArgs>(args: SelectSubset<T, EstadoCreditoUpdateArgs<ExtArgs>>): Prisma__EstadoCreditoClient<$Result.GetResult<Prisma.$EstadoCreditoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EstadoCreditos.
     * @param {EstadoCreditoDeleteManyArgs} args - Arguments to filter EstadoCreditos to delete.
     * @example
     * // Delete a few EstadoCreditos
     * const { count } = await prisma.estadoCredito.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstadoCreditoDeleteManyArgs>(args?: SelectSubset<T, EstadoCreditoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EstadoCreditos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoCreditoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EstadoCreditos
     * const estadoCredito = await prisma.estadoCredito.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstadoCreditoUpdateManyArgs>(args: SelectSubset<T, EstadoCreditoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EstadoCredito.
     * @param {EstadoCreditoUpsertArgs} args - Arguments to update or create a EstadoCredito.
     * @example
     * // Update or create a EstadoCredito
     * const estadoCredito = await prisma.estadoCredito.upsert({
     *   create: {
     *     // ... data to create a EstadoCredito
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EstadoCredito we want to update
     *   }
     * })
     */
    upsert<T extends EstadoCreditoUpsertArgs>(args: SelectSubset<T, EstadoCreditoUpsertArgs<ExtArgs>>): Prisma__EstadoCreditoClient<$Result.GetResult<Prisma.$EstadoCreditoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EstadoCreditos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoCreditoCountArgs} args - Arguments to filter EstadoCreditos to count.
     * @example
     * // Count the number of EstadoCreditos
     * const count = await prisma.estadoCredito.count({
     *   where: {
     *     // ... the filter for the EstadoCreditos we want to count
     *   }
     * })
    **/
    count<T extends EstadoCreditoCountArgs>(
      args?: Subset<T, EstadoCreditoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstadoCreditoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EstadoCredito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoCreditoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EstadoCreditoAggregateArgs>(args: Subset<T, EstadoCreditoAggregateArgs>): Prisma.PrismaPromise<GetEstadoCreditoAggregateType<T>>

    /**
     * Group by EstadoCredito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstadoCreditoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EstadoCreditoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstadoCreditoGroupByArgs['orderBy'] }
        : { orderBy?: EstadoCreditoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EstadoCreditoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstadoCreditoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EstadoCredito model
   */
  readonly fields: EstadoCreditoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EstadoCredito.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstadoCreditoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creditos<T extends EstadoCredito$creditosArgs<ExtArgs> = {}>(args?: Subset<T, EstadoCredito$creditosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditoAsociadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historialOrigen<T extends EstadoCredito$historialOrigenArgs<ExtArgs> = {}>(args?: Subset<T, EstadoCredito$historialOrigenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistorialCreditoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historialDestino<T extends EstadoCredito$historialDestinoArgs<ExtArgs> = {}>(args?: Subset<T, EstadoCredito$historialDestinoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistorialCreditoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EstadoCredito model
   */
  interface EstadoCreditoFieldRefs {
    readonly id: FieldRef<"EstadoCredito", 'Int'>
    readonly codigo: FieldRef<"EstadoCredito", 'String'>
    readonly descripcion: FieldRef<"EstadoCredito", 'String'>
    readonly activo: FieldRef<"EstadoCredito", 'Boolean'>
    readonly fechaRegistro: FieldRef<"EstadoCredito", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EstadoCredito findUnique
   */
  export type EstadoCreditoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCredito
     */
    select?: EstadoCreditoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoCredito
     */
    omit?: EstadoCreditoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoCreditoInclude<ExtArgs> | null
    /**
     * Filter, which EstadoCredito to fetch.
     */
    where: EstadoCreditoWhereUniqueInput
  }

  /**
   * EstadoCredito findUniqueOrThrow
   */
  export type EstadoCreditoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCredito
     */
    select?: EstadoCreditoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoCredito
     */
    omit?: EstadoCreditoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoCreditoInclude<ExtArgs> | null
    /**
     * Filter, which EstadoCredito to fetch.
     */
    where: EstadoCreditoWhereUniqueInput
  }

  /**
   * EstadoCredito findFirst
   */
  export type EstadoCreditoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCredito
     */
    select?: EstadoCreditoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoCredito
     */
    omit?: EstadoCreditoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoCreditoInclude<ExtArgs> | null
    /**
     * Filter, which EstadoCredito to fetch.
     */
    where?: EstadoCreditoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstadoCreditos to fetch.
     */
    orderBy?: EstadoCreditoOrderByWithRelationInput | EstadoCreditoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EstadoCreditos.
     */
    cursor?: EstadoCreditoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstadoCreditos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstadoCreditos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EstadoCreditos.
     */
    distinct?: EstadoCreditoScalarFieldEnum | EstadoCreditoScalarFieldEnum[]
  }

  /**
   * EstadoCredito findFirstOrThrow
   */
  export type EstadoCreditoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCredito
     */
    select?: EstadoCreditoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoCredito
     */
    omit?: EstadoCreditoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoCreditoInclude<ExtArgs> | null
    /**
     * Filter, which EstadoCredito to fetch.
     */
    where?: EstadoCreditoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstadoCreditos to fetch.
     */
    orderBy?: EstadoCreditoOrderByWithRelationInput | EstadoCreditoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EstadoCreditos.
     */
    cursor?: EstadoCreditoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstadoCreditos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstadoCreditos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EstadoCreditos.
     */
    distinct?: EstadoCreditoScalarFieldEnum | EstadoCreditoScalarFieldEnum[]
  }

  /**
   * EstadoCredito findMany
   */
  export type EstadoCreditoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCredito
     */
    select?: EstadoCreditoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoCredito
     */
    omit?: EstadoCreditoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoCreditoInclude<ExtArgs> | null
    /**
     * Filter, which EstadoCreditos to fetch.
     */
    where?: EstadoCreditoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EstadoCreditos to fetch.
     */
    orderBy?: EstadoCreditoOrderByWithRelationInput | EstadoCreditoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EstadoCreditos.
     */
    cursor?: EstadoCreditoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EstadoCreditos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EstadoCreditos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EstadoCreditos.
     */
    distinct?: EstadoCreditoScalarFieldEnum | EstadoCreditoScalarFieldEnum[]
  }

  /**
   * EstadoCredito create
   */
  export type EstadoCreditoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCredito
     */
    select?: EstadoCreditoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoCredito
     */
    omit?: EstadoCreditoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoCreditoInclude<ExtArgs> | null
    /**
     * The data needed to create a EstadoCredito.
     */
    data: XOR<EstadoCreditoCreateInput, EstadoCreditoUncheckedCreateInput>
  }

  /**
   * EstadoCredito createMany
   */
  export type EstadoCreditoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EstadoCreditos.
     */
    data: EstadoCreditoCreateManyInput | EstadoCreditoCreateManyInput[]
  }

  /**
   * EstadoCredito update
   */
  export type EstadoCreditoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCredito
     */
    select?: EstadoCreditoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoCredito
     */
    omit?: EstadoCreditoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoCreditoInclude<ExtArgs> | null
    /**
     * The data needed to update a EstadoCredito.
     */
    data: XOR<EstadoCreditoUpdateInput, EstadoCreditoUncheckedUpdateInput>
    /**
     * Choose, which EstadoCredito to update.
     */
    where: EstadoCreditoWhereUniqueInput
  }

  /**
   * EstadoCredito updateMany
   */
  export type EstadoCreditoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EstadoCreditos.
     */
    data: XOR<EstadoCreditoUpdateManyMutationInput, EstadoCreditoUncheckedUpdateManyInput>
    /**
     * Filter which EstadoCreditos to update
     */
    where?: EstadoCreditoWhereInput
    /**
     * Limit how many EstadoCreditos to update.
     */
    limit?: number
  }

  /**
   * EstadoCredito upsert
   */
  export type EstadoCreditoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCredito
     */
    select?: EstadoCreditoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoCredito
     */
    omit?: EstadoCreditoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoCreditoInclude<ExtArgs> | null
    /**
     * The filter to search for the EstadoCredito to update in case it exists.
     */
    where: EstadoCreditoWhereUniqueInput
    /**
     * In case the EstadoCredito found by the `where` argument doesn't exist, create a new EstadoCredito with this data.
     */
    create: XOR<EstadoCreditoCreateInput, EstadoCreditoUncheckedCreateInput>
    /**
     * In case the EstadoCredito was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstadoCreditoUpdateInput, EstadoCreditoUncheckedUpdateInput>
  }

  /**
   * EstadoCredito delete
   */
  export type EstadoCreditoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCredito
     */
    select?: EstadoCreditoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoCredito
     */
    omit?: EstadoCreditoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoCreditoInclude<ExtArgs> | null
    /**
     * Filter which EstadoCredito to delete.
     */
    where: EstadoCreditoWhereUniqueInput
  }

  /**
   * EstadoCredito deleteMany
   */
  export type EstadoCreditoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EstadoCreditos to delete
     */
    where?: EstadoCreditoWhereInput
    /**
     * Limit how many EstadoCreditos to delete.
     */
    limit?: number
  }

  /**
   * EstadoCredito.creditos
   */
  export type EstadoCredito$creditosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditoAsociado
     */
    select?: CreditoAsociadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditoAsociado
     */
    omit?: CreditoAsociadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditoAsociadoInclude<ExtArgs> | null
    where?: CreditoAsociadoWhereInput
    orderBy?: CreditoAsociadoOrderByWithRelationInput | CreditoAsociadoOrderByWithRelationInput[]
    cursor?: CreditoAsociadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreditoAsociadoScalarFieldEnum | CreditoAsociadoScalarFieldEnum[]
  }

  /**
   * EstadoCredito.historialOrigen
   */
  export type EstadoCredito$historialOrigenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialCredito
     */
    select?: HistorialCreditoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialCredito
     */
    omit?: HistorialCreditoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialCreditoInclude<ExtArgs> | null
    where?: HistorialCreditoWhereInput
    orderBy?: HistorialCreditoOrderByWithRelationInput | HistorialCreditoOrderByWithRelationInput[]
    cursor?: HistorialCreditoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistorialCreditoScalarFieldEnum | HistorialCreditoScalarFieldEnum[]
  }

  /**
   * EstadoCredito.historialDestino
   */
  export type EstadoCredito$historialDestinoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialCredito
     */
    select?: HistorialCreditoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialCredito
     */
    omit?: HistorialCreditoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialCreditoInclude<ExtArgs> | null
    where?: HistorialCreditoWhereInput
    orderBy?: HistorialCreditoOrderByWithRelationInput | HistorialCreditoOrderByWithRelationInput[]
    cursor?: HistorialCreditoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistorialCreditoScalarFieldEnum | HistorialCreditoScalarFieldEnum[]
  }

  /**
   * EstadoCredito without action
   */
  export type EstadoCreditoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCredito
     */
    select?: EstadoCreditoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoCredito
     */
    omit?: EstadoCreditoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoCreditoInclude<ExtArgs> | null
  }


  /**
   * Model MetodoPago
   */

  export type AggregateMetodoPago = {
    _count: MetodoPagoCountAggregateOutputType | null
    _avg: MetodoPagoAvgAggregateOutputType | null
    _sum: MetodoPagoSumAggregateOutputType | null
    _min: MetodoPagoMinAggregateOutputType | null
    _max: MetodoPagoMaxAggregateOutputType | null
  }

  export type MetodoPagoAvgAggregateOutputType = {
    id: number | null
  }

  export type MetodoPagoSumAggregateOutputType = {
    id: number | null
  }

  export type MetodoPagoMinAggregateOutputType = {
    id: number | null
    codigo: string | null
    descripcion: string | null
    activo: boolean | null
    fechaRegistro: Date | null
  }

  export type MetodoPagoMaxAggregateOutputType = {
    id: number | null
    codigo: string | null
    descripcion: string | null
    activo: boolean | null
    fechaRegistro: Date | null
  }

  export type MetodoPagoCountAggregateOutputType = {
    id: number
    codigo: number
    descripcion: number
    activo: number
    fechaRegistro: number
    _all: number
  }


  export type MetodoPagoAvgAggregateInputType = {
    id?: true
  }

  export type MetodoPagoSumAggregateInputType = {
    id?: true
  }

  export type MetodoPagoMinAggregateInputType = {
    id?: true
    codigo?: true
    descripcion?: true
    activo?: true
    fechaRegistro?: true
  }

  export type MetodoPagoMaxAggregateInputType = {
    id?: true
    codigo?: true
    descripcion?: true
    activo?: true
    fechaRegistro?: true
  }

  export type MetodoPagoCountAggregateInputType = {
    id?: true
    codigo?: true
    descripcion?: true
    activo?: true
    fechaRegistro?: true
    _all?: true
  }

  export type MetodoPagoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetodoPago to aggregate.
     */
    where?: MetodoPagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetodoPagos to fetch.
     */
    orderBy?: MetodoPagoOrderByWithRelationInput | MetodoPagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetodoPagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetodoPagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetodoPagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MetodoPagos
    **/
    _count?: true | MetodoPagoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MetodoPagoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MetodoPagoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetodoPagoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetodoPagoMaxAggregateInputType
  }

  export type GetMetodoPagoAggregateType<T extends MetodoPagoAggregateArgs> = {
        [P in keyof T & keyof AggregateMetodoPago]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetodoPago[P]>
      : GetScalarType<T[P], AggregateMetodoPago[P]>
  }




  export type MetodoPagoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetodoPagoWhereInput
    orderBy?: MetodoPagoOrderByWithAggregationInput | MetodoPagoOrderByWithAggregationInput[]
    by: MetodoPagoScalarFieldEnum[] | MetodoPagoScalarFieldEnum
    having?: MetodoPagoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetodoPagoCountAggregateInputType | true
    _avg?: MetodoPagoAvgAggregateInputType
    _sum?: MetodoPagoSumAggregateInputType
    _min?: MetodoPagoMinAggregateInputType
    _max?: MetodoPagoMaxAggregateInputType
  }

  export type MetodoPagoGroupByOutputType = {
    id: number
    codigo: string
    descripcion: string
    activo: boolean
    fechaRegistro: Date
    _count: MetodoPagoCountAggregateOutputType | null
    _avg: MetodoPagoAvgAggregateOutputType | null
    _sum: MetodoPagoSumAggregateOutputType | null
    _min: MetodoPagoMinAggregateOutputType | null
    _max: MetodoPagoMaxAggregateOutputType | null
  }

  type GetMetodoPagoGroupByPayload<T extends MetodoPagoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetodoPagoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetodoPagoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetodoPagoGroupByOutputType[P]>
            : GetScalarType<T[P], MetodoPagoGroupByOutputType[P]>
        }
      >
    >


  export type MetodoPagoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    descripcion?: boolean
    activo?: boolean
    fechaRegistro?: boolean
    creditos?: boolean | MetodoPago$creditosArgs<ExtArgs>
    _count?: boolean | MetodoPagoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metodoPago"]>



  export type MetodoPagoSelectScalar = {
    id?: boolean
    codigo?: boolean
    descripcion?: boolean
    activo?: boolean
    fechaRegistro?: boolean
  }

  export type MetodoPagoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "codigo" | "descripcion" | "activo" | "fechaRegistro", ExtArgs["result"]["metodoPago"]>
  export type MetodoPagoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creditos?: boolean | MetodoPago$creditosArgs<ExtArgs>
    _count?: boolean | MetodoPagoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MetodoPagoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MetodoPago"
    objects: {
      creditos: Prisma.$CreditoAsociadoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      codigo: string
      descripcion: string
      activo: boolean
      fechaRegistro: Date
    }, ExtArgs["result"]["metodoPago"]>
    composites: {}
  }

  type MetodoPagoGetPayload<S extends boolean | null | undefined | MetodoPagoDefaultArgs> = $Result.GetResult<Prisma.$MetodoPagoPayload, S>

  type MetodoPagoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MetodoPagoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetodoPagoCountAggregateInputType | true
    }

  export interface MetodoPagoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MetodoPago'], meta: { name: 'MetodoPago' } }
    /**
     * Find zero or one MetodoPago that matches the filter.
     * @param {MetodoPagoFindUniqueArgs} args - Arguments to find a MetodoPago
     * @example
     * // Get one MetodoPago
     * const metodoPago = await prisma.metodoPago.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetodoPagoFindUniqueArgs>(args: SelectSubset<T, MetodoPagoFindUniqueArgs<ExtArgs>>): Prisma__MetodoPagoClient<$Result.GetResult<Prisma.$MetodoPagoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MetodoPago that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MetodoPagoFindUniqueOrThrowArgs} args - Arguments to find a MetodoPago
     * @example
     * // Get one MetodoPago
     * const metodoPago = await prisma.metodoPago.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetodoPagoFindUniqueOrThrowArgs>(args: SelectSubset<T, MetodoPagoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetodoPagoClient<$Result.GetResult<Prisma.$MetodoPagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MetodoPago that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetodoPagoFindFirstArgs} args - Arguments to find a MetodoPago
     * @example
     * // Get one MetodoPago
     * const metodoPago = await prisma.metodoPago.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetodoPagoFindFirstArgs>(args?: SelectSubset<T, MetodoPagoFindFirstArgs<ExtArgs>>): Prisma__MetodoPagoClient<$Result.GetResult<Prisma.$MetodoPagoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MetodoPago that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetodoPagoFindFirstOrThrowArgs} args - Arguments to find a MetodoPago
     * @example
     * // Get one MetodoPago
     * const metodoPago = await prisma.metodoPago.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetodoPagoFindFirstOrThrowArgs>(args?: SelectSubset<T, MetodoPagoFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetodoPagoClient<$Result.GetResult<Prisma.$MetodoPagoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MetodoPagos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetodoPagoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MetodoPagos
     * const metodoPagos = await prisma.metodoPago.findMany()
     * 
     * // Get first 10 MetodoPagos
     * const metodoPagos = await prisma.metodoPago.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metodoPagoWithIdOnly = await prisma.metodoPago.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MetodoPagoFindManyArgs>(args?: SelectSubset<T, MetodoPagoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetodoPagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MetodoPago.
     * @param {MetodoPagoCreateArgs} args - Arguments to create a MetodoPago.
     * @example
     * // Create one MetodoPago
     * const MetodoPago = await prisma.metodoPago.create({
     *   data: {
     *     // ... data to create a MetodoPago
     *   }
     * })
     * 
     */
    create<T extends MetodoPagoCreateArgs>(args: SelectSubset<T, MetodoPagoCreateArgs<ExtArgs>>): Prisma__MetodoPagoClient<$Result.GetResult<Prisma.$MetodoPagoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MetodoPagos.
     * @param {MetodoPagoCreateManyArgs} args - Arguments to create many MetodoPagos.
     * @example
     * // Create many MetodoPagos
     * const metodoPago = await prisma.metodoPago.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetodoPagoCreateManyArgs>(args?: SelectSubset<T, MetodoPagoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MetodoPago.
     * @param {MetodoPagoDeleteArgs} args - Arguments to delete one MetodoPago.
     * @example
     * // Delete one MetodoPago
     * const MetodoPago = await prisma.metodoPago.delete({
     *   where: {
     *     // ... filter to delete one MetodoPago
     *   }
     * })
     * 
     */
    delete<T extends MetodoPagoDeleteArgs>(args: SelectSubset<T, MetodoPagoDeleteArgs<ExtArgs>>): Prisma__MetodoPagoClient<$Result.GetResult<Prisma.$MetodoPagoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MetodoPago.
     * @param {MetodoPagoUpdateArgs} args - Arguments to update one MetodoPago.
     * @example
     * // Update one MetodoPago
     * const metodoPago = await prisma.metodoPago.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetodoPagoUpdateArgs>(args: SelectSubset<T, MetodoPagoUpdateArgs<ExtArgs>>): Prisma__MetodoPagoClient<$Result.GetResult<Prisma.$MetodoPagoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MetodoPagos.
     * @param {MetodoPagoDeleteManyArgs} args - Arguments to filter MetodoPagos to delete.
     * @example
     * // Delete a few MetodoPagos
     * const { count } = await prisma.metodoPago.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetodoPagoDeleteManyArgs>(args?: SelectSubset<T, MetodoPagoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetodoPagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetodoPagoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MetodoPagos
     * const metodoPago = await prisma.metodoPago.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetodoPagoUpdateManyArgs>(args: SelectSubset<T, MetodoPagoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MetodoPago.
     * @param {MetodoPagoUpsertArgs} args - Arguments to update or create a MetodoPago.
     * @example
     * // Update or create a MetodoPago
     * const metodoPago = await prisma.metodoPago.upsert({
     *   create: {
     *     // ... data to create a MetodoPago
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MetodoPago we want to update
     *   }
     * })
     */
    upsert<T extends MetodoPagoUpsertArgs>(args: SelectSubset<T, MetodoPagoUpsertArgs<ExtArgs>>): Prisma__MetodoPagoClient<$Result.GetResult<Prisma.$MetodoPagoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MetodoPagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetodoPagoCountArgs} args - Arguments to filter MetodoPagos to count.
     * @example
     * // Count the number of MetodoPagos
     * const count = await prisma.metodoPago.count({
     *   where: {
     *     // ... the filter for the MetodoPagos we want to count
     *   }
     * })
    **/
    count<T extends MetodoPagoCountArgs>(
      args?: Subset<T, MetodoPagoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetodoPagoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MetodoPago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetodoPagoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MetodoPagoAggregateArgs>(args: Subset<T, MetodoPagoAggregateArgs>): Prisma.PrismaPromise<GetMetodoPagoAggregateType<T>>

    /**
     * Group by MetodoPago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetodoPagoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MetodoPagoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetodoPagoGroupByArgs['orderBy'] }
        : { orderBy?: MetodoPagoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MetodoPagoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetodoPagoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MetodoPago model
   */
  readonly fields: MetodoPagoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MetodoPago.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetodoPagoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creditos<T extends MetodoPago$creditosArgs<ExtArgs> = {}>(args?: Subset<T, MetodoPago$creditosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditoAsociadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MetodoPago model
   */
  interface MetodoPagoFieldRefs {
    readonly id: FieldRef<"MetodoPago", 'Int'>
    readonly codigo: FieldRef<"MetodoPago", 'String'>
    readonly descripcion: FieldRef<"MetodoPago", 'String'>
    readonly activo: FieldRef<"MetodoPago", 'Boolean'>
    readonly fechaRegistro: FieldRef<"MetodoPago", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MetodoPago findUnique
   */
  export type MetodoPagoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodoPago
     */
    select?: MetodoPagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetodoPago
     */
    omit?: MetodoPagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetodoPagoInclude<ExtArgs> | null
    /**
     * Filter, which MetodoPago to fetch.
     */
    where: MetodoPagoWhereUniqueInput
  }

  /**
   * MetodoPago findUniqueOrThrow
   */
  export type MetodoPagoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodoPago
     */
    select?: MetodoPagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetodoPago
     */
    omit?: MetodoPagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetodoPagoInclude<ExtArgs> | null
    /**
     * Filter, which MetodoPago to fetch.
     */
    where: MetodoPagoWhereUniqueInput
  }

  /**
   * MetodoPago findFirst
   */
  export type MetodoPagoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodoPago
     */
    select?: MetodoPagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetodoPago
     */
    omit?: MetodoPagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetodoPagoInclude<ExtArgs> | null
    /**
     * Filter, which MetodoPago to fetch.
     */
    where?: MetodoPagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetodoPagos to fetch.
     */
    orderBy?: MetodoPagoOrderByWithRelationInput | MetodoPagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetodoPagos.
     */
    cursor?: MetodoPagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetodoPagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetodoPagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetodoPagos.
     */
    distinct?: MetodoPagoScalarFieldEnum | MetodoPagoScalarFieldEnum[]
  }

  /**
   * MetodoPago findFirstOrThrow
   */
  export type MetodoPagoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodoPago
     */
    select?: MetodoPagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetodoPago
     */
    omit?: MetodoPagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetodoPagoInclude<ExtArgs> | null
    /**
     * Filter, which MetodoPago to fetch.
     */
    where?: MetodoPagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetodoPagos to fetch.
     */
    orderBy?: MetodoPagoOrderByWithRelationInput | MetodoPagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetodoPagos.
     */
    cursor?: MetodoPagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetodoPagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetodoPagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetodoPagos.
     */
    distinct?: MetodoPagoScalarFieldEnum | MetodoPagoScalarFieldEnum[]
  }

  /**
   * MetodoPago findMany
   */
  export type MetodoPagoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodoPago
     */
    select?: MetodoPagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetodoPago
     */
    omit?: MetodoPagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetodoPagoInclude<ExtArgs> | null
    /**
     * Filter, which MetodoPagos to fetch.
     */
    where?: MetodoPagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetodoPagos to fetch.
     */
    orderBy?: MetodoPagoOrderByWithRelationInput | MetodoPagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MetodoPagos.
     */
    cursor?: MetodoPagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetodoPagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetodoPagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetodoPagos.
     */
    distinct?: MetodoPagoScalarFieldEnum | MetodoPagoScalarFieldEnum[]
  }

  /**
   * MetodoPago create
   */
  export type MetodoPagoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodoPago
     */
    select?: MetodoPagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetodoPago
     */
    omit?: MetodoPagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetodoPagoInclude<ExtArgs> | null
    /**
     * The data needed to create a MetodoPago.
     */
    data: XOR<MetodoPagoCreateInput, MetodoPagoUncheckedCreateInput>
  }

  /**
   * MetodoPago createMany
   */
  export type MetodoPagoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MetodoPagos.
     */
    data: MetodoPagoCreateManyInput | MetodoPagoCreateManyInput[]
  }

  /**
   * MetodoPago update
   */
  export type MetodoPagoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodoPago
     */
    select?: MetodoPagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetodoPago
     */
    omit?: MetodoPagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetodoPagoInclude<ExtArgs> | null
    /**
     * The data needed to update a MetodoPago.
     */
    data: XOR<MetodoPagoUpdateInput, MetodoPagoUncheckedUpdateInput>
    /**
     * Choose, which MetodoPago to update.
     */
    where: MetodoPagoWhereUniqueInput
  }

  /**
   * MetodoPago updateMany
   */
  export type MetodoPagoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MetodoPagos.
     */
    data: XOR<MetodoPagoUpdateManyMutationInput, MetodoPagoUncheckedUpdateManyInput>
    /**
     * Filter which MetodoPagos to update
     */
    where?: MetodoPagoWhereInput
    /**
     * Limit how many MetodoPagos to update.
     */
    limit?: number
  }

  /**
   * MetodoPago upsert
   */
  export type MetodoPagoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodoPago
     */
    select?: MetodoPagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetodoPago
     */
    omit?: MetodoPagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetodoPagoInclude<ExtArgs> | null
    /**
     * The filter to search for the MetodoPago to update in case it exists.
     */
    where: MetodoPagoWhereUniqueInput
    /**
     * In case the MetodoPago found by the `where` argument doesn't exist, create a new MetodoPago with this data.
     */
    create: XOR<MetodoPagoCreateInput, MetodoPagoUncheckedCreateInput>
    /**
     * In case the MetodoPago was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetodoPagoUpdateInput, MetodoPagoUncheckedUpdateInput>
  }

  /**
   * MetodoPago delete
   */
  export type MetodoPagoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodoPago
     */
    select?: MetodoPagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetodoPago
     */
    omit?: MetodoPagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetodoPagoInclude<ExtArgs> | null
    /**
     * Filter which MetodoPago to delete.
     */
    where: MetodoPagoWhereUniqueInput
  }

  /**
   * MetodoPago deleteMany
   */
  export type MetodoPagoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetodoPagos to delete
     */
    where?: MetodoPagoWhereInput
    /**
     * Limit how many MetodoPagos to delete.
     */
    limit?: number
  }

  /**
   * MetodoPago.creditos
   */
  export type MetodoPago$creditosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditoAsociado
     */
    select?: CreditoAsociadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditoAsociado
     */
    omit?: CreditoAsociadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditoAsociadoInclude<ExtArgs> | null
    where?: CreditoAsociadoWhereInput
    orderBy?: CreditoAsociadoOrderByWithRelationInput | CreditoAsociadoOrderByWithRelationInput[]
    cursor?: CreditoAsociadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreditoAsociadoScalarFieldEnum | CreditoAsociadoScalarFieldEnum[]
  }

  /**
   * MetodoPago without action
   */
  export type MetodoPagoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetodoPago
     */
    select?: MetodoPagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetodoPago
     */
    omit?: MetodoPagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetodoPagoInclude<ExtArgs> | null
  }


  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    id: number | null
    idTipoDocumento: number | null
    idTipoCliente: number | null
  }

  export type ClienteSumAggregateOutputType = {
    id: number | null
    idTipoDocumento: number | null
    idTipoCliente: number | null
  }

  export type ClienteMinAggregateOutputType = {
    id: number | null
    documento: string | null
    nombres: string | null
    apellidos: string | null
    idTipoDocumento: number | null
    idTipoCliente: number | null
    activo: boolean | null
    fechaRegistro: Date | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: number | null
    documento: string | null
    nombres: string | null
    apellidos: string | null
    idTipoDocumento: number | null
    idTipoCliente: number | null
    activo: boolean | null
    fechaRegistro: Date | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    documento: number
    nombres: number
    apellidos: number
    idTipoDocumento: number
    idTipoCliente: number
    activo: number
    fechaRegistro: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    id?: true
    idTipoDocumento?: true
    idTipoCliente?: true
  }

  export type ClienteSumAggregateInputType = {
    id?: true
    idTipoDocumento?: true
    idTipoCliente?: true
  }

  export type ClienteMinAggregateInputType = {
    id?: true
    documento?: true
    nombres?: true
    apellidos?: true
    idTipoDocumento?: true
    idTipoCliente?: true
    activo?: true
    fechaRegistro?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    documento?: true
    nombres?: true
    apellidos?: true
    idTipoDocumento?: true
    idTipoCliente?: true
    activo?: true
    fechaRegistro?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    documento?: true
    nombres?: true
    apellidos?: true
    idTipoDocumento?: true
    idTipoCliente?: true
    activo?: true
    fechaRegistro?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: number
    documento: string
    nombres: string
    apellidos: string
    idTipoDocumento: number
    idTipoCliente: number
    activo: boolean
    fechaRegistro: Date
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documento?: boolean
    nombres?: boolean
    apellidos?: boolean
    idTipoDocumento?: boolean
    idTipoCliente?: boolean
    activo?: boolean
    fechaRegistro?: boolean
    TipoDocumento?: boolean | TipoDocumentoDefaultArgs<ExtArgs>
    TipoCliente?: boolean | TipoClienteDefaultArgs<ExtArgs>
    creditos?: boolean | Cliente$creditosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>



  export type ClienteSelectScalar = {
    id?: boolean
    documento?: boolean
    nombres?: boolean
    apellidos?: boolean
    idTipoDocumento?: boolean
    idTipoCliente?: boolean
    activo?: boolean
    fechaRegistro?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documento" | "nombres" | "apellidos" | "idTipoDocumento" | "idTipoCliente" | "activo" | "fechaRegistro", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TipoDocumento?: boolean | TipoDocumentoDefaultArgs<ExtArgs>
    TipoCliente?: boolean | TipoClienteDefaultArgs<ExtArgs>
    creditos?: boolean | Cliente$creditosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      TipoDocumento: Prisma.$TipoDocumentoPayload<ExtArgs>
      TipoCliente: Prisma.$TipoClientePayload<ExtArgs>
      creditos: Prisma.$CreditoAsociadoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      documento: string
      nombres: string
      apellidos: string
      idTipoDocumento: number
      idTipoCliente: number
      activo: boolean
      fechaRegistro: Date
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    TipoDocumento<T extends TipoDocumentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoDocumentoDefaultArgs<ExtArgs>>): Prisma__TipoDocumentoClient<$Result.GetResult<Prisma.$TipoDocumentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    TipoCliente<T extends TipoClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoClienteDefaultArgs<ExtArgs>>): Prisma__TipoClienteClient<$Result.GetResult<Prisma.$TipoClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creditos<T extends Cliente$creditosArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$creditosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditoAsociadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'Int'>
    readonly documento: FieldRef<"Cliente", 'String'>
    readonly nombres: FieldRef<"Cliente", 'String'>
    readonly apellidos: FieldRef<"Cliente", 'String'>
    readonly idTipoDocumento: FieldRef<"Cliente", 'Int'>
    readonly idTipoCliente: FieldRef<"Cliente", 'Int'>
    readonly activo: FieldRef<"Cliente", 'Boolean'>
    readonly fechaRegistro: FieldRef<"Cliente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.creditos
   */
  export type Cliente$creditosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditoAsociado
     */
    select?: CreditoAsociadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditoAsociado
     */
    omit?: CreditoAsociadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditoAsociadoInclude<ExtArgs> | null
    where?: CreditoAsociadoWhereInput
    orderBy?: CreditoAsociadoOrderByWithRelationInput | CreditoAsociadoOrderByWithRelationInput[]
    cursor?: CreditoAsociadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreditoAsociadoScalarFieldEnum | CreditoAsociadoScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Asesor
   */

  export type AggregateAsesor = {
    _count: AsesorCountAggregateOutputType | null
    _avg: AsesorAvgAggregateOutputType | null
    _sum: AsesorSumAggregateOutputType | null
    _min: AsesorMinAggregateOutputType | null
    _max: AsesorMaxAggregateOutputType | null
  }

  export type AsesorAvgAggregateOutputType = {
    id: number | null
  }

  export type AsesorSumAggregateOutputType = {
    id: number | null
  }

  export type AsesorMinAggregateOutputType = {
    id: number | null
    documento: string | null
    nombre: string | null
    activo: boolean | null
  }

  export type AsesorMaxAggregateOutputType = {
    id: number | null
    documento: string | null
    nombre: string | null
    activo: boolean | null
  }

  export type AsesorCountAggregateOutputType = {
    id: number
    documento: number
    nombre: number
    activo: number
    _all: number
  }


  export type AsesorAvgAggregateInputType = {
    id?: true
  }

  export type AsesorSumAggregateInputType = {
    id?: true
  }

  export type AsesorMinAggregateInputType = {
    id?: true
    documento?: true
    nombre?: true
    activo?: true
  }

  export type AsesorMaxAggregateInputType = {
    id?: true
    documento?: true
    nombre?: true
    activo?: true
  }

  export type AsesorCountAggregateInputType = {
    id?: true
    documento?: true
    nombre?: true
    activo?: true
    _all?: true
  }

  export type AsesorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asesor to aggregate.
     */
    where?: AsesorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asesors to fetch.
     */
    orderBy?: AsesorOrderByWithRelationInput | AsesorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AsesorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asesors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asesors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Asesors
    **/
    _count?: true | AsesorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AsesorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AsesorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AsesorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AsesorMaxAggregateInputType
  }

  export type GetAsesorAggregateType<T extends AsesorAggregateArgs> = {
        [P in keyof T & keyof AggregateAsesor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsesor[P]>
      : GetScalarType<T[P], AggregateAsesor[P]>
  }




  export type AsesorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsesorWhereInput
    orderBy?: AsesorOrderByWithAggregationInput | AsesorOrderByWithAggregationInput[]
    by: AsesorScalarFieldEnum[] | AsesorScalarFieldEnum
    having?: AsesorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AsesorCountAggregateInputType | true
    _avg?: AsesorAvgAggregateInputType
    _sum?: AsesorSumAggregateInputType
    _min?: AsesorMinAggregateInputType
    _max?: AsesorMaxAggregateInputType
  }

  export type AsesorGroupByOutputType = {
    id: number
    documento: string
    nombre: string
    activo: boolean
    _count: AsesorCountAggregateOutputType | null
    _avg: AsesorAvgAggregateOutputType | null
    _sum: AsesorSumAggregateOutputType | null
    _min: AsesorMinAggregateOutputType | null
    _max: AsesorMaxAggregateOutputType | null
  }

  type GetAsesorGroupByPayload<T extends AsesorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AsesorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AsesorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AsesorGroupByOutputType[P]>
            : GetScalarType<T[P], AsesorGroupByOutputType[P]>
        }
      >
    >


  export type AsesorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documento?: boolean
    nombre?: boolean
    activo?: boolean
    creditos?: boolean | Asesor$creditosArgs<ExtArgs>
    _count?: boolean | AsesorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asesor"]>



  export type AsesorSelectScalar = {
    id?: boolean
    documento?: boolean
    nombre?: boolean
    activo?: boolean
  }

  export type AsesorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documento" | "nombre" | "activo", ExtArgs["result"]["asesor"]>
  export type AsesorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creditos?: boolean | Asesor$creditosArgs<ExtArgs>
    _count?: boolean | AsesorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AsesorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Asesor"
    objects: {
      creditos: Prisma.$CreditoAsociadoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      documento: string
      nombre: string
      activo: boolean
    }, ExtArgs["result"]["asesor"]>
    composites: {}
  }

  type AsesorGetPayload<S extends boolean | null | undefined | AsesorDefaultArgs> = $Result.GetResult<Prisma.$AsesorPayload, S>

  type AsesorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AsesorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AsesorCountAggregateInputType | true
    }

  export interface AsesorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Asesor'], meta: { name: 'Asesor' } }
    /**
     * Find zero or one Asesor that matches the filter.
     * @param {AsesorFindUniqueArgs} args - Arguments to find a Asesor
     * @example
     * // Get one Asesor
     * const asesor = await prisma.asesor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AsesorFindUniqueArgs>(args: SelectSubset<T, AsesorFindUniqueArgs<ExtArgs>>): Prisma__AsesorClient<$Result.GetResult<Prisma.$AsesorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Asesor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AsesorFindUniqueOrThrowArgs} args - Arguments to find a Asesor
     * @example
     * // Get one Asesor
     * const asesor = await prisma.asesor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AsesorFindUniqueOrThrowArgs>(args: SelectSubset<T, AsesorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AsesorClient<$Result.GetResult<Prisma.$AsesorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asesor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsesorFindFirstArgs} args - Arguments to find a Asesor
     * @example
     * // Get one Asesor
     * const asesor = await prisma.asesor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AsesorFindFirstArgs>(args?: SelectSubset<T, AsesorFindFirstArgs<ExtArgs>>): Prisma__AsesorClient<$Result.GetResult<Prisma.$AsesorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asesor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsesorFindFirstOrThrowArgs} args - Arguments to find a Asesor
     * @example
     * // Get one Asesor
     * const asesor = await prisma.asesor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AsesorFindFirstOrThrowArgs>(args?: SelectSubset<T, AsesorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AsesorClient<$Result.GetResult<Prisma.$AsesorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Asesors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsesorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Asesors
     * const asesors = await prisma.asesor.findMany()
     * 
     * // Get first 10 Asesors
     * const asesors = await prisma.asesor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const asesorWithIdOnly = await prisma.asesor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AsesorFindManyArgs>(args?: SelectSubset<T, AsesorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsesorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Asesor.
     * @param {AsesorCreateArgs} args - Arguments to create a Asesor.
     * @example
     * // Create one Asesor
     * const Asesor = await prisma.asesor.create({
     *   data: {
     *     // ... data to create a Asesor
     *   }
     * })
     * 
     */
    create<T extends AsesorCreateArgs>(args: SelectSubset<T, AsesorCreateArgs<ExtArgs>>): Prisma__AsesorClient<$Result.GetResult<Prisma.$AsesorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Asesors.
     * @param {AsesorCreateManyArgs} args - Arguments to create many Asesors.
     * @example
     * // Create many Asesors
     * const asesor = await prisma.asesor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AsesorCreateManyArgs>(args?: SelectSubset<T, AsesorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Asesor.
     * @param {AsesorDeleteArgs} args - Arguments to delete one Asesor.
     * @example
     * // Delete one Asesor
     * const Asesor = await prisma.asesor.delete({
     *   where: {
     *     // ... filter to delete one Asesor
     *   }
     * })
     * 
     */
    delete<T extends AsesorDeleteArgs>(args: SelectSubset<T, AsesorDeleteArgs<ExtArgs>>): Prisma__AsesorClient<$Result.GetResult<Prisma.$AsesorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Asesor.
     * @param {AsesorUpdateArgs} args - Arguments to update one Asesor.
     * @example
     * // Update one Asesor
     * const asesor = await prisma.asesor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AsesorUpdateArgs>(args: SelectSubset<T, AsesorUpdateArgs<ExtArgs>>): Prisma__AsesorClient<$Result.GetResult<Prisma.$AsesorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Asesors.
     * @param {AsesorDeleteManyArgs} args - Arguments to filter Asesors to delete.
     * @example
     * // Delete a few Asesors
     * const { count } = await prisma.asesor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AsesorDeleteManyArgs>(args?: SelectSubset<T, AsesorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Asesors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsesorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Asesors
     * const asesor = await prisma.asesor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AsesorUpdateManyArgs>(args: SelectSubset<T, AsesorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Asesor.
     * @param {AsesorUpsertArgs} args - Arguments to update or create a Asesor.
     * @example
     * // Update or create a Asesor
     * const asesor = await prisma.asesor.upsert({
     *   create: {
     *     // ... data to create a Asesor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asesor we want to update
     *   }
     * })
     */
    upsert<T extends AsesorUpsertArgs>(args: SelectSubset<T, AsesorUpsertArgs<ExtArgs>>): Prisma__AsesorClient<$Result.GetResult<Prisma.$AsesorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Asesors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsesorCountArgs} args - Arguments to filter Asesors to count.
     * @example
     * // Count the number of Asesors
     * const count = await prisma.asesor.count({
     *   where: {
     *     // ... the filter for the Asesors we want to count
     *   }
     * })
    **/
    count<T extends AsesorCountArgs>(
      args?: Subset<T, AsesorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AsesorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asesor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsesorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AsesorAggregateArgs>(args: Subset<T, AsesorAggregateArgs>): Prisma.PrismaPromise<GetAsesorAggregateType<T>>

    /**
     * Group by Asesor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsesorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AsesorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AsesorGroupByArgs['orderBy'] }
        : { orderBy?: AsesorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AsesorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsesorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Asesor model
   */
  readonly fields: AsesorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Asesor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AsesorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creditos<T extends Asesor$creditosArgs<ExtArgs> = {}>(args?: Subset<T, Asesor$creditosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditoAsociadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Asesor model
   */
  interface AsesorFieldRefs {
    readonly id: FieldRef<"Asesor", 'Int'>
    readonly documento: FieldRef<"Asesor", 'String'>
    readonly nombre: FieldRef<"Asesor", 'String'>
    readonly activo: FieldRef<"Asesor", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Asesor findUnique
   */
  export type AsesorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asesor
     */
    select?: AsesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asesor
     */
    omit?: AsesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsesorInclude<ExtArgs> | null
    /**
     * Filter, which Asesor to fetch.
     */
    where: AsesorWhereUniqueInput
  }

  /**
   * Asesor findUniqueOrThrow
   */
  export type AsesorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asesor
     */
    select?: AsesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asesor
     */
    omit?: AsesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsesorInclude<ExtArgs> | null
    /**
     * Filter, which Asesor to fetch.
     */
    where: AsesorWhereUniqueInput
  }

  /**
   * Asesor findFirst
   */
  export type AsesorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asesor
     */
    select?: AsesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asesor
     */
    omit?: AsesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsesorInclude<ExtArgs> | null
    /**
     * Filter, which Asesor to fetch.
     */
    where?: AsesorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asesors to fetch.
     */
    orderBy?: AsesorOrderByWithRelationInput | AsesorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Asesors.
     */
    cursor?: AsesorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asesors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asesors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Asesors.
     */
    distinct?: AsesorScalarFieldEnum | AsesorScalarFieldEnum[]
  }

  /**
   * Asesor findFirstOrThrow
   */
  export type AsesorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asesor
     */
    select?: AsesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asesor
     */
    omit?: AsesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsesorInclude<ExtArgs> | null
    /**
     * Filter, which Asesor to fetch.
     */
    where?: AsesorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asesors to fetch.
     */
    orderBy?: AsesorOrderByWithRelationInput | AsesorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Asesors.
     */
    cursor?: AsesorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asesors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asesors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Asesors.
     */
    distinct?: AsesorScalarFieldEnum | AsesorScalarFieldEnum[]
  }

  /**
   * Asesor findMany
   */
  export type AsesorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asesor
     */
    select?: AsesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asesor
     */
    omit?: AsesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsesorInclude<ExtArgs> | null
    /**
     * Filter, which Asesors to fetch.
     */
    where?: AsesorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asesors to fetch.
     */
    orderBy?: AsesorOrderByWithRelationInput | AsesorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Asesors.
     */
    cursor?: AsesorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asesors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asesors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Asesors.
     */
    distinct?: AsesorScalarFieldEnum | AsesorScalarFieldEnum[]
  }

  /**
   * Asesor create
   */
  export type AsesorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asesor
     */
    select?: AsesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asesor
     */
    omit?: AsesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsesorInclude<ExtArgs> | null
    /**
     * The data needed to create a Asesor.
     */
    data: XOR<AsesorCreateInput, AsesorUncheckedCreateInput>
  }

  /**
   * Asesor createMany
   */
  export type AsesorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Asesors.
     */
    data: AsesorCreateManyInput | AsesorCreateManyInput[]
  }

  /**
   * Asesor update
   */
  export type AsesorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asesor
     */
    select?: AsesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asesor
     */
    omit?: AsesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsesorInclude<ExtArgs> | null
    /**
     * The data needed to update a Asesor.
     */
    data: XOR<AsesorUpdateInput, AsesorUncheckedUpdateInput>
    /**
     * Choose, which Asesor to update.
     */
    where: AsesorWhereUniqueInput
  }

  /**
   * Asesor updateMany
   */
  export type AsesorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Asesors.
     */
    data: XOR<AsesorUpdateManyMutationInput, AsesorUncheckedUpdateManyInput>
    /**
     * Filter which Asesors to update
     */
    where?: AsesorWhereInput
    /**
     * Limit how many Asesors to update.
     */
    limit?: number
  }

  /**
   * Asesor upsert
   */
  export type AsesorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asesor
     */
    select?: AsesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asesor
     */
    omit?: AsesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsesorInclude<ExtArgs> | null
    /**
     * The filter to search for the Asesor to update in case it exists.
     */
    where: AsesorWhereUniqueInput
    /**
     * In case the Asesor found by the `where` argument doesn't exist, create a new Asesor with this data.
     */
    create: XOR<AsesorCreateInput, AsesorUncheckedCreateInput>
    /**
     * In case the Asesor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AsesorUpdateInput, AsesorUncheckedUpdateInput>
  }

  /**
   * Asesor delete
   */
  export type AsesorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asesor
     */
    select?: AsesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asesor
     */
    omit?: AsesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsesorInclude<ExtArgs> | null
    /**
     * Filter which Asesor to delete.
     */
    where: AsesorWhereUniqueInput
  }

  /**
   * Asesor deleteMany
   */
  export type AsesorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asesors to delete
     */
    where?: AsesorWhereInput
    /**
     * Limit how many Asesors to delete.
     */
    limit?: number
  }

  /**
   * Asesor.creditos
   */
  export type Asesor$creditosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditoAsociado
     */
    select?: CreditoAsociadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditoAsociado
     */
    omit?: CreditoAsociadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditoAsociadoInclude<ExtArgs> | null
    where?: CreditoAsociadoWhereInput
    orderBy?: CreditoAsociadoOrderByWithRelationInput | CreditoAsociadoOrderByWithRelationInput[]
    cursor?: CreditoAsociadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreditoAsociadoScalarFieldEnum | CreditoAsociadoScalarFieldEnum[]
  }

  /**
   * Asesor without action
   */
  export type AsesorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asesor
     */
    select?: AsesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asesor
     */
    omit?: AsesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsesorInclude<ExtArgs> | null
  }


  /**
   * Model CreditoAsociado
   */

  export type AggregateCreditoAsociado = {
    _count: CreditoAsociadoCountAggregateOutputType | null
    _avg: CreditoAsociadoAvgAggregateOutputType | null
    _sum: CreditoAsociadoSumAggregateOutputType | null
    _min: CreditoAsociadoMinAggregateOutputType | null
    _max: CreditoAsociadoMaxAggregateOutputType | null
  }

  export type CreditoAsociadoAvgAggregateOutputType = {
    id: number | null
    idCliente: number | null
    idTipoCredito: number | null
    idFormaPago: number | null
    idEstadoCredito: number | null
    idAsesor: number | null
    valorSolicitado: Decimal | null
    tasaInteres: Decimal | null
    numeroCuotas: number | null
    entidadId: number | null
  }

  export type CreditoAsociadoSumAggregateOutputType = {
    id: number | null
    idCliente: number | null
    idTipoCredito: number | null
    idFormaPago: number | null
    idEstadoCredito: number | null
    idAsesor: number | null
    valorSolicitado: Decimal | null
    tasaInteres: Decimal | null
    numeroCuotas: number | null
    entidadId: number | null
  }

  export type CreditoAsociadoMinAggregateOutputType = {
    id: number | null
    numeroCredito: string | null
    identificacionAsociado: string | null
    nombreAsociado: string | null
    idCliente: number | null
    idTipoCredito: number | null
    idFormaPago: number | null
    idEstadoCredito: number | null
    idAsesor: number | null
    valorSolicitado: Decimal | null
    tasaInteres: Decimal | null
    numeroCuotas: number | null
    entidadId: number | null
    activo: boolean | null
    createdBy: string | null
    updatedBy: string | null
    fechaSolicitud: Date | null
    fechaActualizacion: Date | null
  }

  export type CreditoAsociadoMaxAggregateOutputType = {
    id: number | null
    numeroCredito: string | null
    identificacionAsociado: string | null
    nombreAsociado: string | null
    idCliente: number | null
    idTipoCredito: number | null
    idFormaPago: number | null
    idEstadoCredito: number | null
    idAsesor: number | null
    valorSolicitado: Decimal | null
    tasaInteres: Decimal | null
    numeroCuotas: number | null
    entidadId: number | null
    activo: boolean | null
    createdBy: string | null
    updatedBy: string | null
    fechaSolicitud: Date | null
    fechaActualizacion: Date | null
  }

  export type CreditoAsociadoCountAggregateOutputType = {
    id: number
    numeroCredito: number
    identificacionAsociado: number
    nombreAsociado: number
    idCliente: number
    idTipoCredito: number
    idFormaPago: number
    idEstadoCredito: number
    idAsesor: number
    valorSolicitado: number
    tasaInteres: number
    numeroCuotas: number
    entidadId: number
    activo: number
    createdBy: number
    updatedBy: number
    fechaSolicitud: number
    fechaActualizacion: number
    _all: number
  }


  export type CreditoAsociadoAvgAggregateInputType = {
    id?: true
    idCliente?: true
    idTipoCredito?: true
    idFormaPago?: true
    idEstadoCredito?: true
    idAsesor?: true
    valorSolicitado?: true
    tasaInteres?: true
    numeroCuotas?: true
    entidadId?: true
  }

  export type CreditoAsociadoSumAggregateInputType = {
    id?: true
    idCliente?: true
    idTipoCredito?: true
    idFormaPago?: true
    idEstadoCredito?: true
    idAsesor?: true
    valorSolicitado?: true
    tasaInteres?: true
    numeroCuotas?: true
    entidadId?: true
  }

  export type CreditoAsociadoMinAggregateInputType = {
    id?: true
    numeroCredito?: true
    identificacionAsociado?: true
    nombreAsociado?: true
    idCliente?: true
    idTipoCredito?: true
    idFormaPago?: true
    idEstadoCredito?: true
    idAsesor?: true
    valorSolicitado?: true
    tasaInteres?: true
    numeroCuotas?: true
    entidadId?: true
    activo?: true
    createdBy?: true
    updatedBy?: true
    fechaSolicitud?: true
    fechaActualizacion?: true
  }

  export type CreditoAsociadoMaxAggregateInputType = {
    id?: true
    numeroCredito?: true
    identificacionAsociado?: true
    nombreAsociado?: true
    idCliente?: true
    idTipoCredito?: true
    idFormaPago?: true
    idEstadoCredito?: true
    idAsesor?: true
    valorSolicitado?: true
    tasaInteres?: true
    numeroCuotas?: true
    entidadId?: true
    activo?: true
    createdBy?: true
    updatedBy?: true
    fechaSolicitud?: true
    fechaActualizacion?: true
  }

  export type CreditoAsociadoCountAggregateInputType = {
    id?: true
    numeroCredito?: true
    identificacionAsociado?: true
    nombreAsociado?: true
    idCliente?: true
    idTipoCredito?: true
    idFormaPago?: true
    idEstadoCredito?: true
    idAsesor?: true
    valorSolicitado?: true
    tasaInteres?: true
    numeroCuotas?: true
    entidadId?: true
    activo?: true
    createdBy?: true
    updatedBy?: true
    fechaSolicitud?: true
    fechaActualizacion?: true
    _all?: true
  }

  export type CreditoAsociadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditoAsociado to aggregate.
     */
    where?: CreditoAsociadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditoAsociados to fetch.
     */
    orderBy?: CreditoAsociadoOrderByWithRelationInput | CreditoAsociadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreditoAsociadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditoAsociados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditoAsociados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CreditoAsociados
    **/
    _count?: true | CreditoAsociadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreditoAsociadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreditoAsociadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreditoAsociadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreditoAsociadoMaxAggregateInputType
  }

  export type GetCreditoAsociadoAggregateType<T extends CreditoAsociadoAggregateArgs> = {
        [P in keyof T & keyof AggregateCreditoAsociado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreditoAsociado[P]>
      : GetScalarType<T[P], AggregateCreditoAsociado[P]>
  }




  export type CreditoAsociadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditoAsociadoWhereInput
    orderBy?: CreditoAsociadoOrderByWithAggregationInput | CreditoAsociadoOrderByWithAggregationInput[]
    by: CreditoAsociadoScalarFieldEnum[] | CreditoAsociadoScalarFieldEnum
    having?: CreditoAsociadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreditoAsociadoCountAggregateInputType | true
    _avg?: CreditoAsociadoAvgAggregateInputType
    _sum?: CreditoAsociadoSumAggregateInputType
    _min?: CreditoAsociadoMinAggregateInputType
    _max?: CreditoAsociadoMaxAggregateInputType
  }

  export type CreditoAsociadoGroupByOutputType = {
    id: number
    numeroCredito: string
    identificacionAsociado: string
    nombreAsociado: string
    idCliente: number
    idTipoCredito: number
    idFormaPago: number
    idEstadoCredito: number
    idAsesor: number | null
    valorSolicitado: Decimal
    tasaInteres: Decimal
    numeroCuotas: number
    entidadId: number
    activo: boolean
    createdBy: string
    updatedBy: string | null
    fechaSolicitud: Date
    fechaActualizacion: Date
    _count: CreditoAsociadoCountAggregateOutputType | null
    _avg: CreditoAsociadoAvgAggregateOutputType | null
    _sum: CreditoAsociadoSumAggregateOutputType | null
    _min: CreditoAsociadoMinAggregateOutputType | null
    _max: CreditoAsociadoMaxAggregateOutputType | null
  }

  type GetCreditoAsociadoGroupByPayload<T extends CreditoAsociadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreditoAsociadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreditoAsociadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreditoAsociadoGroupByOutputType[P]>
            : GetScalarType<T[P], CreditoAsociadoGroupByOutputType[P]>
        }
      >
    >


  export type CreditoAsociadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numeroCredito?: boolean
    identificacionAsociado?: boolean
    nombreAsociado?: boolean
    idCliente?: boolean
    idTipoCredito?: boolean
    idFormaPago?: boolean
    idEstadoCredito?: boolean
    idAsesor?: boolean
    valorSolicitado?: boolean
    tasaInteres?: boolean
    numeroCuotas?: boolean
    entidadId?: boolean
    activo?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    fechaSolicitud?: boolean
    fechaActualizacion?: boolean
    Cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    TipoCredito?: boolean | TipoCreditoDefaultArgs<ExtArgs>
    FormaPago?: boolean | MetodoPagoDefaultArgs<ExtArgs>
    Estado?: boolean | EstadoCreditoDefaultArgs<ExtArgs>
    Asesor?: boolean | CreditoAsociado$AsesorArgs<ExtArgs>
    historial?: boolean | CreditoAsociado$historialArgs<ExtArgs>
    webhookOutbox?: boolean | CreditoAsociado$webhookOutboxArgs<ExtArgs>
    _count?: boolean | CreditoAsociadoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditoAsociado"]>



  export type CreditoAsociadoSelectScalar = {
    id?: boolean
    numeroCredito?: boolean
    identificacionAsociado?: boolean
    nombreAsociado?: boolean
    idCliente?: boolean
    idTipoCredito?: boolean
    idFormaPago?: boolean
    idEstadoCredito?: boolean
    idAsesor?: boolean
    valorSolicitado?: boolean
    tasaInteres?: boolean
    numeroCuotas?: boolean
    entidadId?: boolean
    activo?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    fechaSolicitud?: boolean
    fechaActualizacion?: boolean
  }

  export type CreditoAsociadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numeroCredito" | "identificacionAsociado" | "nombreAsociado" | "idCliente" | "idTipoCredito" | "idFormaPago" | "idEstadoCredito" | "idAsesor" | "valorSolicitado" | "tasaInteres" | "numeroCuotas" | "entidadId" | "activo" | "createdBy" | "updatedBy" | "fechaSolicitud" | "fechaActualizacion", ExtArgs["result"]["creditoAsociado"]>
  export type CreditoAsociadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    TipoCredito?: boolean | TipoCreditoDefaultArgs<ExtArgs>
    FormaPago?: boolean | MetodoPagoDefaultArgs<ExtArgs>
    Estado?: boolean | EstadoCreditoDefaultArgs<ExtArgs>
    Asesor?: boolean | CreditoAsociado$AsesorArgs<ExtArgs>
    historial?: boolean | CreditoAsociado$historialArgs<ExtArgs>
    webhookOutbox?: boolean | CreditoAsociado$webhookOutboxArgs<ExtArgs>
    _count?: boolean | CreditoAsociadoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CreditoAsociadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CreditoAsociado"
    objects: {
      Cliente: Prisma.$ClientePayload<ExtArgs>
      TipoCredito: Prisma.$TipoCreditoPayload<ExtArgs>
      FormaPago: Prisma.$MetodoPagoPayload<ExtArgs>
      Estado: Prisma.$EstadoCreditoPayload<ExtArgs>
      Asesor: Prisma.$AsesorPayload<ExtArgs> | null
      historial: Prisma.$HistorialCreditoPayload<ExtArgs>[]
      webhookOutbox: Prisma.$WebhookOutboxPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      numeroCredito: string
      identificacionAsociado: string
      nombreAsociado: string
      idCliente: number
      idTipoCredito: number
      idFormaPago: number
      idEstadoCredito: number
      idAsesor: number | null
      valorSolicitado: Prisma.Decimal
      tasaInteres: Prisma.Decimal
      numeroCuotas: number
      entidadId: number
      activo: boolean
      createdBy: string
      updatedBy: string | null
      fechaSolicitud: Date
      fechaActualizacion: Date
    }, ExtArgs["result"]["creditoAsociado"]>
    composites: {}
  }

  type CreditoAsociadoGetPayload<S extends boolean | null | undefined | CreditoAsociadoDefaultArgs> = $Result.GetResult<Prisma.$CreditoAsociadoPayload, S>

  type CreditoAsociadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CreditoAsociadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CreditoAsociadoCountAggregateInputType | true
    }

  export interface CreditoAsociadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CreditoAsociado'], meta: { name: 'CreditoAsociado' } }
    /**
     * Find zero or one CreditoAsociado that matches the filter.
     * @param {CreditoAsociadoFindUniqueArgs} args - Arguments to find a CreditoAsociado
     * @example
     * // Get one CreditoAsociado
     * const creditoAsociado = await prisma.creditoAsociado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreditoAsociadoFindUniqueArgs>(args: SelectSubset<T, CreditoAsociadoFindUniqueArgs<ExtArgs>>): Prisma__CreditoAsociadoClient<$Result.GetResult<Prisma.$CreditoAsociadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CreditoAsociado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CreditoAsociadoFindUniqueOrThrowArgs} args - Arguments to find a CreditoAsociado
     * @example
     * // Get one CreditoAsociado
     * const creditoAsociado = await prisma.creditoAsociado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreditoAsociadoFindUniqueOrThrowArgs>(args: SelectSubset<T, CreditoAsociadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreditoAsociadoClient<$Result.GetResult<Prisma.$CreditoAsociadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreditoAsociado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditoAsociadoFindFirstArgs} args - Arguments to find a CreditoAsociado
     * @example
     * // Get one CreditoAsociado
     * const creditoAsociado = await prisma.creditoAsociado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreditoAsociadoFindFirstArgs>(args?: SelectSubset<T, CreditoAsociadoFindFirstArgs<ExtArgs>>): Prisma__CreditoAsociadoClient<$Result.GetResult<Prisma.$CreditoAsociadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreditoAsociado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditoAsociadoFindFirstOrThrowArgs} args - Arguments to find a CreditoAsociado
     * @example
     * // Get one CreditoAsociado
     * const creditoAsociado = await prisma.creditoAsociado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreditoAsociadoFindFirstOrThrowArgs>(args?: SelectSubset<T, CreditoAsociadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreditoAsociadoClient<$Result.GetResult<Prisma.$CreditoAsociadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CreditoAsociados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditoAsociadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CreditoAsociados
     * const creditoAsociados = await prisma.creditoAsociado.findMany()
     * 
     * // Get first 10 CreditoAsociados
     * const creditoAsociados = await prisma.creditoAsociado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creditoAsociadoWithIdOnly = await prisma.creditoAsociado.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CreditoAsociadoFindManyArgs>(args?: SelectSubset<T, CreditoAsociadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditoAsociadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CreditoAsociado.
     * @param {CreditoAsociadoCreateArgs} args - Arguments to create a CreditoAsociado.
     * @example
     * // Create one CreditoAsociado
     * const CreditoAsociado = await prisma.creditoAsociado.create({
     *   data: {
     *     // ... data to create a CreditoAsociado
     *   }
     * })
     * 
     */
    create<T extends CreditoAsociadoCreateArgs>(args: SelectSubset<T, CreditoAsociadoCreateArgs<ExtArgs>>): Prisma__CreditoAsociadoClient<$Result.GetResult<Prisma.$CreditoAsociadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CreditoAsociados.
     * @param {CreditoAsociadoCreateManyArgs} args - Arguments to create many CreditoAsociados.
     * @example
     * // Create many CreditoAsociados
     * const creditoAsociado = await prisma.creditoAsociado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreditoAsociadoCreateManyArgs>(args?: SelectSubset<T, CreditoAsociadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CreditoAsociado.
     * @param {CreditoAsociadoDeleteArgs} args - Arguments to delete one CreditoAsociado.
     * @example
     * // Delete one CreditoAsociado
     * const CreditoAsociado = await prisma.creditoAsociado.delete({
     *   where: {
     *     // ... filter to delete one CreditoAsociado
     *   }
     * })
     * 
     */
    delete<T extends CreditoAsociadoDeleteArgs>(args: SelectSubset<T, CreditoAsociadoDeleteArgs<ExtArgs>>): Prisma__CreditoAsociadoClient<$Result.GetResult<Prisma.$CreditoAsociadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CreditoAsociado.
     * @param {CreditoAsociadoUpdateArgs} args - Arguments to update one CreditoAsociado.
     * @example
     * // Update one CreditoAsociado
     * const creditoAsociado = await prisma.creditoAsociado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreditoAsociadoUpdateArgs>(args: SelectSubset<T, CreditoAsociadoUpdateArgs<ExtArgs>>): Prisma__CreditoAsociadoClient<$Result.GetResult<Prisma.$CreditoAsociadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CreditoAsociados.
     * @param {CreditoAsociadoDeleteManyArgs} args - Arguments to filter CreditoAsociados to delete.
     * @example
     * // Delete a few CreditoAsociados
     * const { count } = await prisma.creditoAsociado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreditoAsociadoDeleteManyArgs>(args?: SelectSubset<T, CreditoAsociadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditoAsociados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditoAsociadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CreditoAsociados
     * const creditoAsociado = await prisma.creditoAsociado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreditoAsociadoUpdateManyArgs>(args: SelectSubset<T, CreditoAsociadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CreditoAsociado.
     * @param {CreditoAsociadoUpsertArgs} args - Arguments to update or create a CreditoAsociado.
     * @example
     * // Update or create a CreditoAsociado
     * const creditoAsociado = await prisma.creditoAsociado.upsert({
     *   create: {
     *     // ... data to create a CreditoAsociado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CreditoAsociado we want to update
     *   }
     * })
     */
    upsert<T extends CreditoAsociadoUpsertArgs>(args: SelectSubset<T, CreditoAsociadoUpsertArgs<ExtArgs>>): Prisma__CreditoAsociadoClient<$Result.GetResult<Prisma.$CreditoAsociadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CreditoAsociados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditoAsociadoCountArgs} args - Arguments to filter CreditoAsociados to count.
     * @example
     * // Count the number of CreditoAsociados
     * const count = await prisma.creditoAsociado.count({
     *   where: {
     *     // ... the filter for the CreditoAsociados we want to count
     *   }
     * })
    **/
    count<T extends CreditoAsociadoCountArgs>(
      args?: Subset<T, CreditoAsociadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreditoAsociadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CreditoAsociado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditoAsociadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CreditoAsociadoAggregateArgs>(args: Subset<T, CreditoAsociadoAggregateArgs>): Prisma.PrismaPromise<GetCreditoAsociadoAggregateType<T>>

    /**
     * Group by CreditoAsociado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditoAsociadoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CreditoAsociadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreditoAsociadoGroupByArgs['orderBy'] }
        : { orderBy?: CreditoAsociadoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CreditoAsociadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreditoAsociadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CreditoAsociado model
   */
  readonly fields: CreditoAsociadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CreditoAsociado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreditoAsociadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    TipoCredito<T extends TipoCreditoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoCreditoDefaultArgs<ExtArgs>>): Prisma__TipoCreditoClient<$Result.GetResult<Prisma.$TipoCreditoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    FormaPago<T extends MetodoPagoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MetodoPagoDefaultArgs<ExtArgs>>): Prisma__MetodoPagoClient<$Result.GetResult<Prisma.$MetodoPagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Estado<T extends EstadoCreditoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstadoCreditoDefaultArgs<ExtArgs>>): Prisma__EstadoCreditoClient<$Result.GetResult<Prisma.$EstadoCreditoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Asesor<T extends CreditoAsociado$AsesorArgs<ExtArgs> = {}>(args?: Subset<T, CreditoAsociado$AsesorArgs<ExtArgs>>): Prisma__AsesorClient<$Result.GetResult<Prisma.$AsesorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    historial<T extends CreditoAsociado$historialArgs<ExtArgs> = {}>(args?: Subset<T, CreditoAsociado$historialArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistorialCreditoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    webhookOutbox<T extends CreditoAsociado$webhookOutboxArgs<ExtArgs> = {}>(args?: Subset<T, CreditoAsociado$webhookOutboxArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookOutboxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CreditoAsociado model
   */
  interface CreditoAsociadoFieldRefs {
    readonly id: FieldRef<"CreditoAsociado", 'Int'>
    readonly numeroCredito: FieldRef<"CreditoAsociado", 'String'>
    readonly identificacionAsociado: FieldRef<"CreditoAsociado", 'String'>
    readonly nombreAsociado: FieldRef<"CreditoAsociado", 'String'>
    readonly idCliente: FieldRef<"CreditoAsociado", 'Int'>
    readonly idTipoCredito: FieldRef<"CreditoAsociado", 'Int'>
    readonly idFormaPago: FieldRef<"CreditoAsociado", 'Int'>
    readonly idEstadoCredito: FieldRef<"CreditoAsociado", 'Int'>
    readonly idAsesor: FieldRef<"CreditoAsociado", 'Int'>
    readonly valorSolicitado: FieldRef<"CreditoAsociado", 'Decimal'>
    readonly tasaInteres: FieldRef<"CreditoAsociado", 'Decimal'>
    readonly numeroCuotas: FieldRef<"CreditoAsociado", 'Int'>
    readonly entidadId: FieldRef<"CreditoAsociado", 'Int'>
    readonly activo: FieldRef<"CreditoAsociado", 'Boolean'>
    readonly createdBy: FieldRef<"CreditoAsociado", 'String'>
    readonly updatedBy: FieldRef<"CreditoAsociado", 'String'>
    readonly fechaSolicitud: FieldRef<"CreditoAsociado", 'DateTime'>
    readonly fechaActualizacion: FieldRef<"CreditoAsociado", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CreditoAsociado findUnique
   */
  export type CreditoAsociadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditoAsociado
     */
    select?: CreditoAsociadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditoAsociado
     */
    omit?: CreditoAsociadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditoAsociadoInclude<ExtArgs> | null
    /**
     * Filter, which CreditoAsociado to fetch.
     */
    where: CreditoAsociadoWhereUniqueInput
  }

  /**
   * CreditoAsociado findUniqueOrThrow
   */
  export type CreditoAsociadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditoAsociado
     */
    select?: CreditoAsociadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditoAsociado
     */
    omit?: CreditoAsociadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditoAsociadoInclude<ExtArgs> | null
    /**
     * Filter, which CreditoAsociado to fetch.
     */
    where: CreditoAsociadoWhereUniqueInput
  }

  /**
   * CreditoAsociado findFirst
   */
  export type CreditoAsociadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditoAsociado
     */
    select?: CreditoAsociadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditoAsociado
     */
    omit?: CreditoAsociadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditoAsociadoInclude<ExtArgs> | null
    /**
     * Filter, which CreditoAsociado to fetch.
     */
    where?: CreditoAsociadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditoAsociados to fetch.
     */
    orderBy?: CreditoAsociadoOrderByWithRelationInput | CreditoAsociadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditoAsociados.
     */
    cursor?: CreditoAsociadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditoAsociados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditoAsociados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditoAsociados.
     */
    distinct?: CreditoAsociadoScalarFieldEnum | CreditoAsociadoScalarFieldEnum[]
  }

  /**
   * CreditoAsociado findFirstOrThrow
   */
  export type CreditoAsociadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditoAsociado
     */
    select?: CreditoAsociadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditoAsociado
     */
    omit?: CreditoAsociadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditoAsociadoInclude<ExtArgs> | null
    /**
     * Filter, which CreditoAsociado to fetch.
     */
    where?: CreditoAsociadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditoAsociados to fetch.
     */
    orderBy?: CreditoAsociadoOrderByWithRelationInput | CreditoAsociadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditoAsociados.
     */
    cursor?: CreditoAsociadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditoAsociados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditoAsociados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditoAsociados.
     */
    distinct?: CreditoAsociadoScalarFieldEnum | CreditoAsociadoScalarFieldEnum[]
  }

  /**
   * CreditoAsociado findMany
   */
  export type CreditoAsociadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditoAsociado
     */
    select?: CreditoAsociadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditoAsociado
     */
    omit?: CreditoAsociadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditoAsociadoInclude<ExtArgs> | null
    /**
     * Filter, which CreditoAsociados to fetch.
     */
    where?: CreditoAsociadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditoAsociados to fetch.
     */
    orderBy?: CreditoAsociadoOrderByWithRelationInput | CreditoAsociadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CreditoAsociados.
     */
    cursor?: CreditoAsociadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditoAsociados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditoAsociados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditoAsociados.
     */
    distinct?: CreditoAsociadoScalarFieldEnum | CreditoAsociadoScalarFieldEnum[]
  }

  /**
   * CreditoAsociado create
   */
  export type CreditoAsociadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditoAsociado
     */
    select?: CreditoAsociadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditoAsociado
     */
    omit?: CreditoAsociadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditoAsociadoInclude<ExtArgs> | null
    /**
     * The data needed to create a CreditoAsociado.
     */
    data: XOR<CreditoAsociadoCreateInput, CreditoAsociadoUncheckedCreateInput>
  }

  /**
   * CreditoAsociado createMany
   */
  export type CreditoAsociadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CreditoAsociados.
     */
    data: CreditoAsociadoCreateManyInput | CreditoAsociadoCreateManyInput[]
  }

  /**
   * CreditoAsociado update
   */
  export type CreditoAsociadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditoAsociado
     */
    select?: CreditoAsociadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditoAsociado
     */
    omit?: CreditoAsociadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditoAsociadoInclude<ExtArgs> | null
    /**
     * The data needed to update a CreditoAsociado.
     */
    data: XOR<CreditoAsociadoUpdateInput, CreditoAsociadoUncheckedUpdateInput>
    /**
     * Choose, which CreditoAsociado to update.
     */
    where: CreditoAsociadoWhereUniqueInput
  }

  /**
   * CreditoAsociado updateMany
   */
  export type CreditoAsociadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CreditoAsociados.
     */
    data: XOR<CreditoAsociadoUpdateManyMutationInput, CreditoAsociadoUncheckedUpdateManyInput>
    /**
     * Filter which CreditoAsociados to update
     */
    where?: CreditoAsociadoWhereInput
    /**
     * Limit how many CreditoAsociados to update.
     */
    limit?: number
  }

  /**
   * CreditoAsociado upsert
   */
  export type CreditoAsociadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditoAsociado
     */
    select?: CreditoAsociadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditoAsociado
     */
    omit?: CreditoAsociadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditoAsociadoInclude<ExtArgs> | null
    /**
     * The filter to search for the CreditoAsociado to update in case it exists.
     */
    where: CreditoAsociadoWhereUniqueInput
    /**
     * In case the CreditoAsociado found by the `where` argument doesn't exist, create a new CreditoAsociado with this data.
     */
    create: XOR<CreditoAsociadoCreateInput, CreditoAsociadoUncheckedCreateInput>
    /**
     * In case the CreditoAsociado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreditoAsociadoUpdateInput, CreditoAsociadoUncheckedUpdateInput>
  }

  /**
   * CreditoAsociado delete
   */
  export type CreditoAsociadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditoAsociado
     */
    select?: CreditoAsociadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditoAsociado
     */
    omit?: CreditoAsociadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditoAsociadoInclude<ExtArgs> | null
    /**
     * Filter which CreditoAsociado to delete.
     */
    where: CreditoAsociadoWhereUniqueInput
  }

  /**
   * CreditoAsociado deleteMany
   */
  export type CreditoAsociadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditoAsociados to delete
     */
    where?: CreditoAsociadoWhereInput
    /**
     * Limit how many CreditoAsociados to delete.
     */
    limit?: number
  }

  /**
   * CreditoAsociado.Asesor
   */
  export type CreditoAsociado$AsesorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asesor
     */
    select?: AsesorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Asesor
     */
    omit?: AsesorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsesorInclude<ExtArgs> | null
    where?: AsesorWhereInput
  }

  /**
   * CreditoAsociado.historial
   */
  export type CreditoAsociado$historialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialCredito
     */
    select?: HistorialCreditoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialCredito
     */
    omit?: HistorialCreditoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialCreditoInclude<ExtArgs> | null
    where?: HistorialCreditoWhereInput
    orderBy?: HistorialCreditoOrderByWithRelationInput | HistorialCreditoOrderByWithRelationInput[]
    cursor?: HistorialCreditoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistorialCreditoScalarFieldEnum | HistorialCreditoScalarFieldEnum[]
  }

  /**
   * CreditoAsociado.webhookOutbox
   */
  export type CreditoAsociado$webhookOutboxArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookOutbox
     */
    select?: WebhookOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookOutbox
     */
    omit?: WebhookOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookOutboxInclude<ExtArgs> | null
    where?: WebhookOutboxWhereInput
    orderBy?: WebhookOutboxOrderByWithRelationInput | WebhookOutboxOrderByWithRelationInput[]
    cursor?: WebhookOutboxWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WebhookOutboxScalarFieldEnum | WebhookOutboxScalarFieldEnum[]
  }

  /**
   * CreditoAsociado without action
   */
  export type CreditoAsociadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditoAsociado
     */
    select?: CreditoAsociadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditoAsociado
     */
    omit?: CreditoAsociadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditoAsociadoInclude<ExtArgs> | null
  }


  /**
   * Model HistorialCredito
   */

  export type AggregateHistorialCredito = {
    _count: HistorialCreditoCountAggregateOutputType | null
    _avg: HistorialCreditoAvgAggregateOutputType | null
    _sum: HistorialCreditoSumAggregateOutputType | null
    _min: HistorialCreditoMinAggregateOutputType | null
    _max: HistorialCreditoMaxAggregateOutputType | null
  }

  export type HistorialCreditoAvgAggregateOutputType = {
    id: number | null
    idCredito: number | null
    idEstadoAnterior: number | null
    idEstadoNuevo: number | null
  }

  export type HistorialCreditoSumAggregateOutputType = {
    id: number | null
    idCredito: number | null
    idEstadoAnterior: number | null
    idEstadoNuevo: number | null
  }

  export type HistorialCreditoMinAggregateOutputType = {
    id: number | null
    idCredito: number | null
    tipoCambio: string | null
    idEstadoAnterior: number | null
    idEstadoNuevo: number | null
    estadoAnterior: string | null
    estadoNuevo: string | null
    usuario: string | null
    observacion: string | null
    camposModificados: string | null
    fecha: Date | null
  }

  export type HistorialCreditoMaxAggregateOutputType = {
    id: number | null
    idCredito: number | null
    tipoCambio: string | null
    idEstadoAnterior: number | null
    idEstadoNuevo: number | null
    estadoAnterior: string | null
    estadoNuevo: string | null
    usuario: string | null
    observacion: string | null
    camposModificados: string | null
    fecha: Date | null
  }

  export type HistorialCreditoCountAggregateOutputType = {
    id: number
    idCredito: number
    tipoCambio: number
    idEstadoAnterior: number
    idEstadoNuevo: number
    estadoAnterior: number
    estadoNuevo: number
    usuario: number
    observacion: number
    camposModificados: number
    fecha: number
    _all: number
  }


  export type HistorialCreditoAvgAggregateInputType = {
    id?: true
    idCredito?: true
    idEstadoAnterior?: true
    idEstadoNuevo?: true
  }

  export type HistorialCreditoSumAggregateInputType = {
    id?: true
    idCredito?: true
    idEstadoAnterior?: true
    idEstadoNuevo?: true
  }

  export type HistorialCreditoMinAggregateInputType = {
    id?: true
    idCredito?: true
    tipoCambio?: true
    idEstadoAnterior?: true
    idEstadoNuevo?: true
    estadoAnterior?: true
    estadoNuevo?: true
    usuario?: true
    observacion?: true
    camposModificados?: true
    fecha?: true
  }

  export type HistorialCreditoMaxAggregateInputType = {
    id?: true
    idCredito?: true
    tipoCambio?: true
    idEstadoAnterior?: true
    idEstadoNuevo?: true
    estadoAnterior?: true
    estadoNuevo?: true
    usuario?: true
    observacion?: true
    camposModificados?: true
    fecha?: true
  }

  export type HistorialCreditoCountAggregateInputType = {
    id?: true
    idCredito?: true
    tipoCambio?: true
    idEstadoAnterior?: true
    idEstadoNuevo?: true
    estadoAnterior?: true
    estadoNuevo?: true
    usuario?: true
    observacion?: true
    camposModificados?: true
    fecha?: true
    _all?: true
  }

  export type HistorialCreditoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistorialCredito to aggregate.
     */
    where?: HistorialCreditoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistorialCreditos to fetch.
     */
    orderBy?: HistorialCreditoOrderByWithRelationInput | HistorialCreditoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistorialCreditoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistorialCreditos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistorialCreditos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HistorialCreditos
    **/
    _count?: true | HistorialCreditoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistorialCreditoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistorialCreditoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistorialCreditoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistorialCreditoMaxAggregateInputType
  }

  export type GetHistorialCreditoAggregateType<T extends HistorialCreditoAggregateArgs> = {
        [P in keyof T & keyof AggregateHistorialCredito]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistorialCredito[P]>
      : GetScalarType<T[P], AggregateHistorialCredito[P]>
  }




  export type HistorialCreditoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistorialCreditoWhereInput
    orderBy?: HistorialCreditoOrderByWithAggregationInput | HistorialCreditoOrderByWithAggregationInput[]
    by: HistorialCreditoScalarFieldEnum[] | HistorialCreditoScalarFieldEnum
    having?: HistorialCreditoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistorialCreditoCountAggregateInputType | true
    _avg?: HistorialCreditoAvgAggregateInputType
    _sum?: HistorialCreditoSumAggregateInputType
    _min?: HistorialCreditoMinAggregateInputType
    _max?: HistorialCreditoMaxAggregateInputType
  }

  export type HistorialCreditoGroupByOutputType = {
    id: number
    idCredito: number
    tipoCambio: string
    idEstadoAnterior: number | null
    idEstadoNuevo: number
    estadoAnterior: string | null
    estadoNuevo: string
    usuario: string
    observacion: string | null
    camposModificados: string | null
    fecha: Date
    _count: HistorialCreditoCountAggregateOutputType | null
    _avg: HistorialCreditoAvgAggregateOutputType | null
    _sum: HistorialCreditoSumAggregateOutputType | null
    _min: HistorialCreditoMinAggregateOutputType | null
    _max: HistorialCreditoMaxAggregateOutputType | null
  }

  type GetHistorialCreditoGroupByPayload<T extends HistorialCreditoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistorialCreditoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistorialCreditoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistorialCreditoGroupByOutputType[P]>
            : GetScalarType<T[P], HistorialCreditoGroupByOutputType[P]>
        }
      >
    >


  export type HistorialCreditoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idCredito?: boolean
    tipoCambio?: boolean
    idEstadoAnterior?: boolean
    idEstadoNuevo?: boolean
    estadoAnterior?: boolean
    estadoNuevo?: boolean
    usuario?: boolean
    observacion?: boolean
    camposModificados?: boolean
    fecha?: boolean
    Credito?: boolean | CreditoAsociadoDefaultArgs<ExtArgs>
    EstadoAnterior?: boolean | HistorialCredito$EstadoAnteriorArgs<ExtArgs>
    EstadoNuevo?: boolean | EstadoCreditoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historialCredito"]>



  export type HistorialCreditoSelectScalar = {
    id?: boolean
    idCredito?: boolean
    tipoCambio?: boolean
    idEstadoAnterior?: boolean
    idEstadoNuevo?: boolean
    estadoAnterior?: boolean
    estadoNuevo?: boolean
    usuario?: boolean
    observacion?: boolean
    camposModificados?: boolean
    fecha?: boolean
  }

  export type HistorialCreditoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idCredito" | "tipoCambio" | "idEstadoAnterior" | "idEstadoNuevo" | "estadoAnterior" | "estadoNuevo" | "usuario" | "observacion" | "camposModificados" | "fecha", ExtArgs["result"]["historialCredito"]>
  export type HistorialCreditoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Credito?: boolean | CreditoAsociadoDefaultArgs<ExtArgs>
    EstadoAnterior?: boolean | HistorialCredito$EstadoAnteriorArgs<ExtArgs>
    EstadoNuevo?: boolean | EstadoCreditoDefaultArgs<ExtArgs>
  }

  export type $HistorialCreditoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HistorialCredito"
    objects: {
      Credito: Prisma.$CreditoAsociadoPayload<ExtArgs>
      EstadoAnterior: Prisma.$EstadoCreditoPayload<ExtArgs> | null
      EstadoNuevo: Prisma.$EstadoCreditoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idCredito: number
      tipoCambio: string
      idEstadoAnterior: number | null
      idEstadoNuevo: number
      estadoAnterior: string | null
      estadoNuevo: string
      usuario: string
      observacion: string | null
      camposModificados: string | null
      fecha: Date
    }, ExtArgs["result"]["historialCredito"]>
    composites: {}
  }

  type HistorialCreditoGetPayload<S extends boolean | null | undefined | HistorialCreditoDefaultArgs> = $Result.GetResult<Prisma.$HistorialCreditoPayload, S>

  type HistorialCreditoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistorialCreditoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistorialCreditoCountAggregateInputType | true
    }

  export interface HistorialCreditoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HistorialCredito'], meta: { name: 'HistorialCredito' } }
    /**
     * Find zero or one HistorialCredito that matches the filter.
     * @param {HistorialCreditoFindUniqueArgs} args - Arguments to find a HistorialCredito
     * @example
     * // Get one HistorialCredito
     * const historialCredito = await prisma.historialCredito.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistorialCreditoFindUniqueArgs>(args: SelectSubset<T, HistorialCreditoFindUniqueArgs<ExtArgs>>): Prisma__HistorialCreditoClient<$Result.GetResult<Prisma.$HistorialCreditoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HistorialCredito that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistorialCreditoFindUniqueOrThrowArgs} args - Arguments to find a HistorialCredito
     * @example
     * // Get one HistorialCredito
     * const historialCredito = await prisma.historialCredito.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistorialCreditoFindUniqueOrThrowArgs>(args: SelectSubset<T, HistorialCreditoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistorialCreditoClient<$Result.GetResult<Prisma.$HistorialCreditoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistorialCredito that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialCreditoFindFirstArgs} args - Arguments to find a HistorialCredito
     * @example
     * // Get one HistorialCredito
     * const historialCredito = await prisma.historialCredito.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistorialCreditoFindFirstArgs>(args?: SelectSubset<T, HistorialCreditoFindFirstArgs<ExtArgs>>): Prisma__HistorialCreditoClient<$Result.GetResult<Prisma.$HistorialCreditoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistorialCredito that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialCreditoFindFirstOrThrowArgs} args - Arguments to find a HistorialCredito
     * @example
     * // Get one HistorialCredito
     * const historialCredito = await prisma.historialCredito.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistorialCreditoFindFirstOrThrowArgs>(args?: SelectSubset<T, HistorialCreditoFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistorialCreditoClient<$Result.GetResult<Prisma.$HistorialCreditoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HistorialCreditos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialCreditoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HistorialCreditos
     * const historialCreditos = await prisma.historialCredito.findMany()
     * 
     * // Get first 10 HistorialCreditos
     * const historialCreditos = await prisma.historialCredito.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historialCreditoWithIdOnly = await prisma.historialCredito.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistorialCreditoFindManyArgs>(args?: SelectSubset<T, HistorialCreditoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistorialCreditoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HistorialCredito.
     * @param {HistorialCreditoCreateArgs} args - Arguments to create a HistorialCredito.
     * @example
     * // Create one HistorialCredito
     * const HistorialCredito = await prisma.historialCredito.create({
     *   data: {
     *     // ... data to create a HistorialCredito
     *   }
     * })
     * 
     */
    create<T extends HistorialCreditoCreateArgs>(args: SelectSubset<T, HistorialCreditoCreateArgs<ExtArgs>>): Prisma__HistorialCreditoClient<$Result.GetResult<Prisma.$HistorialCreditoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HistorialCreditos.
     * @param {HistorialCreditoCreateManyArgs} args - Arguments to create many HistorialCreditos.
     * @example
     * // Create many HistorialCreditos
     * const historialCredito = await prisma.historialCredito.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistorialCreditoCreateManyArgs>(args?: SelectSubset<T, HistorialCreditoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HistorialCredito.
     * @param {HistorialCreditoDeleteArgs} args - Arguments to delete one HistorialCredito.
     * @example
     * // Delete one HistorialCredito
     * const HistorialCredito = await prisma.historialCredito.delete({
     *   where: {
     *     // ... filter to delete one HistorialCredito
     *   }
     * })
     * 
     */
    delete<T extends HistorialCreditoDeleteArgs>(args: SelectSubset<T, HistorialCreditoDeleteArgs<ExtArgs>>): Prisma__HistorialCreditoClient<$Result.GetResult<Prisma.$HistorialCreditoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HistorialCredito.
     * @param {HistorialCreditoUpdateArgs} args - Arguments to update one HistorialCredito.
     * @example
     * // Update one HistorialCredito
     * const historialCredito = await prisma.historialCredito.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistorialCreditoUpdateArgs>(args: SelectSubset<T, HistorialCreditoUpdateArgs<ExtArgs>>): Prisma__HistorialCreditoClient<$Result.GetResult<Prisma.$HistorialCreditoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HistorialCreditos.
     * @param {HistorialCreditoDeleteManyArgs} args - Arguments to filter HistorialCreditos to delete.
     * @example
     * // Delete a few HistorialCreditos
     * const { count } = await prisma.historialCredito.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistorialCreditoDeleteManyArgs>(args?: SelectSubset<T, HistorialCreditoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistorialCreditos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialCreditoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HistorialCreditos
     * const historialCredito = await prisma.historialCredito.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistorialCreditoUpdateManyArgs>(args: SelectSubset<T, HistorialCreditoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HistorialCredito.
     * @param {HistorialCreditoUpsertArgs} args - Arguments to update or create a HistorialCredito.
     * @example
     * // Update or create a HistorialCredito
     * const historialCredito = await prisma.historialCredito.upsert({
     *   create: {
     *     // ... data to create a HistorialCredito
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HistorialCredito we want to update
     *   }
     * })
     */
    upsert<T extends HistorialCreditoUpsertArgs>(args: SelectSubset<T, HistorialCreditoUpsertArgs<ExtArgs>>): Prisma__HistorialCreditoClient<$Result.GetResult<Prisma.$HistorialCreditoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HistorialCreditos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialCreditoCountArgs} args - Arguments to filter HistorialCreditos to count.
     * @example
     * // Count the number of HistorialCreditos
     * const count = await prisma.historialCredito.count({
     *   where: {
     *     // ... the filter for the HistorialCreditos we want to count
     *   }
     * })
    **/
    count<T extends HistorialCreditoCountArgs>(
      args?: Subset<T, HistorialCreditoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistorialCreditoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HistorialCredito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialCreditoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HistorialCreditoAggregateArgs>(args: Subset<T, HistorialCreditoAggregateArgs>): Prisma.PrismaPromise<GetHistorialCreditoAggregateType<T>>

    /**
     * Group by HistorialCredito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialCreditoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HistorialCreditoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistorialCreditoGroupByArgs['orderBy'] }
        : { orderBy?: HistorialCreditoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HistorialCreditoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistorialCreditoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HistorialCredito model
   */
  readonly fields: HistorialCreditoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HistorialCredito.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistorialCreditoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Credito<T extends CreditoAsociadoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CreditoAsociadoDefaultArgs<ExtArgs>>): Prisma__CreditoAsociadoClient<$Result.GetResult<Prisma.$CreditoAsociadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    EstadoAnterior<T extends HistorialCredito$EstadoAnteriorArgs<ExtArgs> = {}>(args?: Subset<T, HistorialCredito$EstadoAnteriorArgs<ExtArgs>>): Prisma__EstadoCreditoClient<$Result.GetResult<Prisma.$EstadoCreditoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    EstadoNuevo<T extends EstadoCreditoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstadoCreditoDefaultArgs<ExtArgs>>): Prisma__EstadoCreditoClient<$Result.GetResult<Prisma.$EstadoCreditoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HistorialCredito model
   */
  interface HistorialCreditoFieldRefs {
    readonly id: FieldRef<"HistorialCredito", 'Int'>
    readonly idCredito: FieldRef<"HistorialCredito", 'Int'>
    readonly tipoCambio: FieldRef<"HistorialCredito", 'String'>
    readonly idEstadoAnterior: FieldRef<"HistorialCredito", 'Int'>
    readonly idEstadoNuevo: FieldRef<"HistorialCredito", 'Int'>
    readonly estadoAnterior: FieldRef<"HistorialCredito", 'String'>
    readonly estadoNuevo: FieldRef<"HistorialCredito", 'String'>
    readonly usuario: FieldRef<"HistorialCredito", 'String'>
    readonly observacion: FieldRef<"HistorialCredito", 'String'>
    readonly camposModificados: FieldRef<"HistorialCredito", 'String'>
    readonly fecha: FieldRef<"HistorialCredito", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HistorialCredito findUnique
   */
  export type HistorialCreditoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialCredito
     */
    select?: HistorialCreditoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialCredito
     */
    omit?: HistorialCreditoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialCreditoInclude<ExtArgs> | null
    /**
     * Filter, which HistorialCredito to fetch.
     */
    where: HistorialCreditoWhereUniqueInput
  }

  /**
   * HistorialCredito findUniqueOrThrow
   */
  export type HistorialCreditoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialCredito
     */
    select?: HistorialCreditoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialCredito
     */
    omit?: HistorialCreditoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialCreditoInclude<ExtArgs> | null
    /**
     * Filter, which HistorialCredito to fetch.
     */
    where: HistorialCreditoWhereUniqueInput
  }

  /**
   * HistorialCredito findFirst
   */
  export type HistorialCreditoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialCredito
     */
    select?: HistorialCreditoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialCredito
     */
    omit?: HistorialCreditoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialCreditoInclude<ExtArgs> | null
    /**
     * Filter, which HistorialCredito to fetch.
     */
    where?: HistorialCreditoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistorialCreditos to fetch.
     */
    orderBy?: HistorialCreditoOrderByWithRelationInput | HistorialCreditoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistorialCreditos.
     */
    cursor?: HistorialCreditoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistorialCreditos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistorialCreditos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistorialCreditos.
     */
    distinct?: HistorialCreditoScalarFieldEnum | HistorialCreditoScalarFieldEnum[]
  }

  /**
   * HistorialCredito findFirstOrThrow
   */
  export type HistorialCreditoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialCredito
     */
    select?: HistorialCreditoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialCredito
     */
    omit?: HistorialCreditoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialCreditoInclude<ExtArgs> | null
    /**
     * Filter, which HistorialCredito to fetch.
     */
    where?: HistorialCreditoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistorialCreditos to fetch.
     */
    orderBy?: HistorialCreditoOrderByWithRelationInput | HistorialCreditoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistorialCreditos.
     */
    cursor?: HistorialCreditoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistorialCreditos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistorialCreditos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistorialCreditos.
     */
    distinct?: HistorialCreditoScalarFieldEnum | HistorialCreditoScalarFieldEnum[]
  }

  /**
   * HistorialCredito findMany
   */
  export type HistorialCreditoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialCredito
     */
    select?: HistorialCreditoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialCredito
     */
    omit?: HistorialCreditoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialCreditoInclude<ExtArgs> | null
    /**
     * Filter, which HistorialCreditos to fetch.
     */
    where?: HistorialCreditoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistorialCreditos to fetch.
     */
    orderBy?: HistorialCreditoOrderByWithRelationInput | HistorialCreditoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HistorialCreditos.
     */
    cursor?: HistorialCreditoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistorialCreditos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistorialCreditos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistorialCreditos.
     */
    distinct?: HistorialCreditoScalarFieldEnum | HistorialCreditoScalarFieldEnum[]
  }

  /**
   * HistorialCredito create
   */
  export type HistorialCreditoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialCredito
     */
    select?: HistorialCreditoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialCredito
     */
    omit?: HistorialCreditoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialCreditoInclude<ExtArgs> | null
    /**
     * The data needed to create a HistorialCredito.
     */
    data: XOR<HistorialCreditoCreateInput, HistorialCreditoUncheckedCreateInput>
  }

  /**
   * HistorialCredito createMany
   */
  export type HistorialCreditoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HistorialCreditos.
     */
    data: HistorialCreditoCreateManyInput | HistorialCreditoCreateManyInput[]
  }

  /**
   * HistorialCredito update
   */
  export type HistorialCreditoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialCredito
     */
    select?: HistorialCreditoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialCredito
     */
    omit?: HistorialCreditoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialCreditoInclude<ExtArgs> | null
    /**
     * The data needed to update a HistorialCredito.
     */
    data: XOR<HistorialCreditoUpdateInput, HistorialCreditoUncheckedUpdateInput>
    /**
     * Choose, which HistorialCredito to update.
     */
    where: HistorialCreditoWhereUniqueInput
  }

  /**
   * HistorialCredito updateMany
   */
  export type HistorialCreditoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HistorialCreditos.
     */
    data: XOR<HistorialCreditoUpdateManyMutationInput, HistorialCreditoUncheckedUpdateManyInput>
    /**
     * Filter which HistorialCreditos to update
     */
    where?: HistorialCreditoWhereInput
    /**
     * Limit how many HistorialCreditos to update.
     */
    limit?: number
  }

  /**
   * HistorialCredito upsert
   */
  export type HistorialCreditoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialCredito
     */
    select?: HistorialCreditoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialCredito
     */
    omit?: HistorialCreditoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialCreditoInclude<ExtArgs> | null
    /**
     * The filter to search for the HistorialCredito to update in case it exists.
     */
    where: HistorialCreditoWhereUniqueInput
    /**
     * In case the HistorialCredito found by the `where` argument doesn't exist, create a new HistorialCredito with this data.
     */
    create: XOR<HistorialCreditoCreateInput, HistorialCreditoUncheckedCreateInput>
    /**
     * In case the HistorialCredito was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistorialCreditoUpdateInput, HistorialCreditoUncheckedUpdateInput>
  }

  /**
   * HistorialCredito delete
   */
  export type HistorialCreditoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialCredito
     */
    select?: HistorialCreditoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialCredito
     */
    omit?: HistorialCreditoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialCreditoInclude<ExtArgs> | null
    /**
     * Filter which HistorialCredito to delete.
     */
    where: HistorialCreditoWhereUniqueInput
  }

  /**
   * HistorialCredito deleteMany
   */
  export type HistorialCreditoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistorialCreditos to delete
     */
    where?: HistorialCreditoWhereInput
    /**
     * Limit how many HistorialCreditos to delete.
     */
    limit?: number
  }

  /**
   * HistorialCredito.EstadoAnterior
   */
  export type HistorialCredito$EstadoAnteriorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstadoCredito
     */
    select?: EstadoCreditoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EstadoCredito
     */
    omit?: EstadoCreditoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstadoCreditoInclude<ExtArgs> | null
    where?: EstadoCreditoWhereInput
  }

  /**
   * HistorialCredito without action
   */
  export type HistorialCreditoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialCredito
     */
    select?: HistorialCreditoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialCredito
     */
    omit?: HistorialCreditoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialCreditoInclude<ExtArgs> | null
  }


  /**
   * Model WebhookOutbox
   */

  export type AggregateWebhookOutbox = {
    _count: WebhookOutboxCountAggregateOutputType | null
    _avg: WebhookOutboxAvgAggregateOutputType | null
    _sum: WebhookOutboxSumAggregateOutputType | null
    _min: WebhookOutboxMinAggregateOutputType | null
    _max: WebhookOutboxMaxAggregateOutputType | null
  }

  export type WebhookOutboxAvgAggregateOutputType = {
    id: number | null
    idCredito: number | null
    entidadId: number | null
    intentos: number | null
  }

  export type WebhookOutboxSumAggregateOutputType = {
    id: number | null
    idCredito: number | null
    entidadId: number | null
    intentos: number | null
  }

  export type WebhookOutboxMinAggregateOutputType = {
    id: number | null
    eventId: string | null
    eventType: string | null
    idCredito: number | null
    entidadId: number | null
    payload: string | null
    estado: string | null
    intentos: number | null
    ultimoError: string | null
    proximoIntento: Date | null
    fechaCreacion: Date | null
    fechaEnvio: Date | null
  }

  export type WebhookOutboxMaxAggregateOutputType = {
    id: number | null
    eventId: string | null
    eventType: string | null
    idCredito: number | null
    entidadId: number | null
    payload: string | null
    estado: string | null
    intentos: number | null
    ultimoError: string | null
    proximoIntento: Date | null
    fechaCreacion: Date | null
    fechaEnvio: Date | null
  }

  export type WebhookOutboxCountAggregateOutputType = {
    id: number
    eventId: number
    eventType: number
    idCredito: number
    entidadId: number
    payload: number
    estado: number
    intentos: number
    ultimoError: number
    proximoIntento: number
    fechaCreacion: number
    fechaEnvio: number
    _all: number
  }


  export type WebhookOutboxAvgAggregateInputType = {
    id?: true
    idCredito?: true
    entidadId?: true
    intentos?: true
  }

  export type WebhookOutboxSumAggregateInputType = {
    id?: true
    idCredito?: true
    entidadId?: true
    intentos?: true
  }

  export type WebhookOutboxMinAggregateInputType = {
    id?: true
    eventId?: true
    eventType?: true
    idCredito?: true
    entidadId?: true
    payload?: true
    estado?: true
    intentos?: true
    ultimoError?: true
    proximoIntento?: true
    fechaCreacion?: true
    fechaEnvio?: true
  }

  export type WebhookOutboxMaxAggregateInputType = {
    id?: true
    eventId?: true
    eventType?: true
    idCredito?: true
    entidadId?: true
    payload?: true
    estado?: true
    intentos?: true
    ultimoError?: true
    proximoIntento?: true
    fechaCreacion?: true
    fechaEnvio?: true
  }

  export type WebhookOutboxCountAggregateInputType = {
    id?: true
    eventId?: true
    eventType?: true
    idCredito?: true
    entidadId?: true
    payload?: true
    estado?: true
    intentos?: true
    ultimoError?: true
    proximoIntento?: true
    fechaCreacion?: true
    fechaEnvio?: true
    _all?: true
  }

  export type WebhookOutboxAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookOutbox to aggregate.
     */
    where?: WebhookOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookOutboxes to fetch.
     */
    orderBy?: WebhookOutboxOrderByWithRelationInput | WebhookOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebhookOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WebhookOutboxes
    **/
    _count?: true | WebhookOutboxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WebhookOutboxAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WebhookOutboxSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebhookOutboxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebhookOutboxMaxAggregateInputType
  }

  export type GetWebhookOutboxAggregateType<T extends WebhookOutboxAggregateArgs> = {
        [P in keyof T & keyof AggregateWebhookOutbox]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebhookOutbox[P]>
      : GetScalarType<T[P], AggregateWebhookOutbox[P]>
  }




  export type WebhookOutboxGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebhookOutboxWhereInput
    orderBy?: WebhookOutboxOrderByWithAggregationInput | WebhookOutboxOrderByWithAggregationInput[]
    by: WebhookOutboxScalarFieldEnum[] | WebhookOutboxScalarFieldEnum
    having?: WebhookOutboxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebhookOutboxCountAggregateInputType | true
    _avg?: WebhookOutboxAvgAggregateInputType
    _sum?: WebhookOutboxSumAggregateInputType
    _min?: WebhookOutboxMinAggregateInputType
    _max?: WebhookOutboxMaxAggregateInputType
  }

  export type WebhookOutboxGroupByOutputType = {
    id: number
    eventId: string
    eventType: string
    idCredito: number
    entidadId: number
    payload: string
    estado: string
    intentos: number
    ultimoError: string | null
    proximoIntento: Date
    fechaCreacion: Date
    fechaEnvio: Date | null
    _count: WebhookOutboxCountAggregateOutputType | null
    _avg: WebhookOutboxAvgAggregateOutputType | null
    _sum: WebhookOutboxSumAggregateOutputType | null
    _min: WebhookOutboxMinAggregateOutputType | null
    _max: WebhookOutboxMaxAggregateOutputType | null
  }

  type GetWebhookOutboxGroupByPayload<T extends WebhookOutboxGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebhookOutboxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebhookOutboxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebhookOutboxGroupByOutputType[P]>
            : GetScalarType<T[P], WebhookOutboxGroupByOutputType[P]>
        }
      >
    >


  export type WebhookOutboxSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    eventType?: boolean
    idCredito?: boolean
    entidadId?: boolean
    payload?: boolean
    estado?: boolean
    intentos?: boolean
    ultimoError?: boolean
    proximoIntento?: boolean
    fechaCreacion?: boolean
    fechaEnvio?: boolean
    Credito?: boolean | CreditoAsociadoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webhookOutbox"]>



  export type WebhookOutboxSelectScalar = {
    id?: boolean
    eventId?: boolean
    eventType?: boolean
    idCredito?: boolean
    entidadId?: boolean
    payload?: boolean
    estado?: boolean
    intentos?: boolean
    ultimoError?: boolean
    proximoIntento?: boolean
    fechaCreacion?: boolean
    fechaEnvio?: boolean
  }

  export type WebhookOutboxOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "eventType" | "idCredito" | "entidadId" | "payload" | "estado" | "intentos" | "ultimoError" | "proximoIntento" | "fechaCreacion" | "fechaEnvio", ExtArgs["result"]["webhookOutbox"]>
  export type WebhookOutboxInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Credito?: boolean | CreditoAsociadoDefaultArgs<ExtArgs>
  }

  export type $WebhookOutboxPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WebhookOutbox"
    objects: {
      Credito: Prisma.$CreditoAsociadoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      eventId: string
      eventType: string
      idCredito: number
      entidadId: number
      payload: string
      estado: string
      intentos: number
      ultimoError: string | null
      proximoIntento: Date
      fechaCreacion: Date
      fechaEnvio: Date | null
    }, ExtArgs["result"]["webhookOutbox"]>
    composites: {}
  }

  type WebhookOutboxGetPayload<S extends boolean | null | undefined | WebhookOutboxDefaultArgs> = $Result.GetResult<Prisma.$WebhookOutboxPayload, S>

  type WebhookOutboxCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WebhookOutboxFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebhookOutboxCountAggregateInputType | true
    }

  export interface WebhookOutboxDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WebhookOutbox'], meta: { name: 'WebhookOutbox' } }
    /**
     * Find zero or one WebhookOutbox that matches the filter.
     * @param {WebhookOutboxFindUniqueArgs} args - Arguments to find a WebhookOutbox
     * @example
     * // Get one WebhookOutbox
     * const webhookOutbox = await prisma.webhookOutbox.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebhookOutboxFindUniqueArgs>(args: SelectSubset<T, WebhookOutboxFindUniqueArgs<ExtArgs>>): Prisma__WebhookOutboxClient<$Result.GetResult<Prisma.$WebhookOutboxPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WebhookOutbox that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WebhookOutboxFindUniqueOrThrowArgs} args - Arguments to find a WebhookOutbox
     * @example
     * // Get one WebhookOutbox
     * const webhookOutbox = await prisma.webhookOutbox.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebhookOutboxFindUniqueOrThrowArgs>(args: SelectSubset<T, WebhookOutboxFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebhookOutboxClient<$Result.GetResult<Prisma.$WebhookOutboxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebhookOutbox that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookOutboxFindFirstArgs} args - Arguments to find a WebhookOutbox
     * @example
     * // Get one WebhookOutbox
     * const webhookOutbox = await prisma.webhookOutbox.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebhookOutboxFindFirstArgs>(args?: SelectSubset<T, WebhookOutboxFindFirstArgs<ExtArgs>>): Prisma__WebhookOutboxClient<$Result.GetResult<Prisma.$WebhookOutboxPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebhookOutbox that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookOutboxFindFirstOrThrowArgs} args - Arguments to find a WebhookOutbox
     * @example
     * // Get one WebhookOutbox
     * const webhookOutbox = await prisma.webhookOutbox.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebhookOutboxFindFirstOrThrowArgs>(args?: SelectSubset<T, WebhookOutboxFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebhookOutboxClient<$Result.GetResult<Prisma.$WebhookOutboxPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WebhookOutboxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookOutboxFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WebhookOutboxes
     * const webhookOutboxes = await prisma.webhookOutbox.findMany()
     * 
     * // Get first 10 WebhookOutboxes
     * const webhookOutboxes = await prisma.webhookOutbox.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webhookOutboxWithIdOnly = await prisma.webhookOutbox.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebhookOutboxFindManyArgs>(args?: SelectSubset<T, WebhookOutboxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookOutboxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WebhookOutbox.
     * @param {WebhookOutboxCreateArgs} args - Arguments to create a WebhookOutbox.
     * @example
     * // Create one WebhookOutbox
     * const WebhookOutbox = await prisma.webhookOutbox.create({
     *   data: {
     *     // ... data to create a WebhookOutbox
     *   }
     * })
     * 
     */
    create<T extends WebhookOutboxCreateArgs>(args: SelectSubset<T, WebhookOutboxCreateArgs<ExtArgs>>): Prisma__WebhookOutboxClient<$Result.GetResult<Prisma.$WebhookOutboxPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WebhookOutboxes.
     * @param {WebhookOutboxCreateManyArgs} args - Arguments to create many WebhookOutboxes.
     * @example
     * // Create many WebhookOutboxes
     * const webhookOutbox = await prisma.webhookOutbox.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebhookOutboxCreateManyArgs>(args?: SelectSubset<T, WebhookOutboxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WebhookOutbox.
     * @param {WebhookOutboxDeleteArgs} args - Arguments to delete one WebhookOutbox.
     * @example
     * // Delete one WebhookOutbox
     * const WebhookOutbox = await prisma.webhookOutbox.delete({
     *   where: {
     *     // ... filter to delete one WebhookOutbox
     *   }
     * })
     * 
     */
    delete<T extends WebhookOutboxDeleteArgs>(args: SelectSubset<T, WebhookOutboxDeleteArgs<ExtArgs>>): Prisma__WebhookOutboxClient<$Result.GetResult<Prisma.$WebhookOutboxPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WebhookOutbox.
     * @param {WebhookOutboxUpdateArgs} args - Arguments to update one WebhookOutbox.
     * @example
     * // Update one WebhookOutbox
     * const webhookOutbox = await prisma.webhookOutbox.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebhookOutboxUpdateArgs>(args: SelectSubset<T, WebhookOutboxUpdateArgs<ExtArgs>>): Prisma__WebhookOutboxClient<$Result.GetResult<Prisma.$WebhookOutboxPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WebhookOutboxes.
     * @param {WebhookOutboxDeleteManyArgs} args - Arguments to filter WebhookOutboxes to delete.
     * @example
     * // Delete a few WebhookOutboxes
     * const { count } = await prisma.webhookOutbox.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebhookOutboxDeleteManyArgs>(args?: SelectSubset<T, WebhookOutboxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebhookOutboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookOutboxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WebhookOutboxes
     * const webhookOutbox = await prisma.webhookOutbox.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebhookOutboxUpdateManyArgs>(args: SelectSubset<T, WebhookOutboxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WebhookOutbox.
     * @param {WebhookOutboxUpsertArgs} args - Arguments to update or create a WebhookOutbox.
     * @example
     * // Update or create a WebhookOutbox
     * const webhookOutbox = await prisma.webhookOutbox.upsert({
     *   create: {
     *     // ... data to create a WebhookOutbox
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WebhookOutbox we want to update
     *   }
     * })
     */
    upsert<T extends WebhookOutboxUpsertArgs>(args: SelectSubset<T, WebhookOutboxUpsertArgs<ExtArgs>>): Prisma__WebhookOutboxClient<$Result.GetResult<Prisma.$WebhookOutboxPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WebhookOutboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookOutboxCountArgs} args - Arguments to filter WebhookOutboxes to count.
     * @example
     * // Count the number of WebhookOutboxes
     * const count = await prisma.webhookOutbox.count({
     *   where: {
     *     // ... the filter for the WebhookOutboxes we want to count
     *   }
     * })
    **/
    count<T extends WebhookOutboxCountArgs>(
      args?: Subset<T, WebhookOutboxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebhookOutboxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WebhookOutbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookOutboxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WebhookOutboxAggregateArgs>(args: Subset<T, WebhookOutboxAggregateArgs>): Prisma.PrismaPromise<GetWebhookOutboxAggregateType<T>>

    /**
     * Group by WebhookOutbox.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookOutboxGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WebhookOutboxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebhookOutboxGroupByArgs['orderBy'] }
        : { orderBy?: WebhookOutboxGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WebhookOutboxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebhookOutboxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WebhookOutbox model
   */
  readonly fields: WebhookOutboxFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WebhookOutbox.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebhookOutboxClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Credito<T extends CreditoAsociadoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CreditoAsociadoDefaultArgs<ExtArgs>>): Prisma__CreditoAsociadoClient<$Result.GetResult<Prisma.$CreditoAsociadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WebhookOutbox model
   */
  interface WebhookOutboxFieldRefs {
    readonly id: FieldRef<"WebhookOutbox", 'Int'>
    readonly eventId: FieldRef<"WebhookOutbox", 'String'>
    readonly eventType: FieldRef<"WebhookOutbox", 'String'>
    readonly idCredito: FieldRef<"WebhookOutbox", 'Int'>
    readonly entidadId: FieldRef<"WebhookOutbox", 'Int'>
    readonly payload: FieldRef<"WebhookOutbox", 'String'>
    readonly estado: FieldRef<"WebhookOutbox", 'String'>
    readonly intentos: FieldRef<"WebhookOutbox", 'Int'>
    readonly ultimoError: FieldRef<"WebhookOutbox", 'String'>
    readonly proximoIntento: FieldRef<"WebhookOutbox", 'DateTime'>
    readonly fechaCreacion: FieldRef<"WebhookOutbox", 'DateTime'>
    readonly fechaEnvio: FieldRef<"WebhookOutbox", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WebhookOutbox findUnique
   */
  export type WebhookOutboxFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookOutbox
     */
    select?: WebhookOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookOutbox
     */
    omit?: WebhookOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookOutboxInclude<ExtArgs> | null
    /**
     * Filter, which WebhookOutbox to fetch.
     */
    where: WebhookOutboxWhereUniqueInput
  }

  /**
   * WebhookOutbox findUniqueOrThrow
   */
  export type WebhookOutboxFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookOutbox
     */
    select?: WebhookOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookOutbox
     */
    omit?: WebhookOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookOutboxInclude<ExtArgs> | null
    /**
     * Filter, which WebhookOutbox to fetch.
     */
    where: WebhookOutboxWhereUniqueInput
  }

  /**
   * WebhookOutbox findFirst
   */
  export type WebhookOutboxFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookOutbox
     */
    select?: WebhookOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookOutbox
     */
    omit?: WebhookOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookOutboxInclude<ExtArgs> | null
    /**
     * Filter, which WebhookOutbox to fetch.
     */
    where?: WebhookOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookOutboxes to fetch.
     */
    orderBy?: WebhookOutboxOrderByWithRelationInput | WebhookOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookOutboxes.
     */
    cursor?: WebhookOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookOutboxes.
     */
    distinct?: WebhookOutboxScalarFieldEnum | WebhookOutboxScalarFieldEnum[]
  }

  /**
   * WebhookOutbox findFirstOrThrow
   */
  export type WebhookOutboxFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookOutbox
     */
    select?: WebhookOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookOutbox
     */
    omit?: WebhookOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookOutboxInclude<ExtArgs> | null
    /**
     * Filter, which WebhookOutbox to fetch.
     */
    where?: WebhookOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookOutboxes to fetch.
     */
    orderBy?: WebhookOutboxOrderByWithRelationInput | WebhookOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookOutboxes.
     */
    cursor?: WebhookOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookOutboxes.
     */
    distinct?: WebhookOutboxScalarFieldEnum | WebhookOutboxScalarFieldEnum[]
  }

  /**
   * WebhookOutbox findMany
   */
  export type WebhookOutboxFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookOutbox
     */
    select?: WebhookOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookOutbox
     */
    omit?: WebhookOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookOutboxInclude<ExtArgs> | null
    /**
     * Filter, which WebhookOutboxes to fetch.
     */
    where?: WebhookOutboxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookOutboxes to fetch.
     */
    orderBy?: WebhookOutboxOrderByWithRelationInput | WebhookOutboxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WebhookOutboxes.
     */
    cursor?: WebhookOutboxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookOutboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookOutboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookOutboxes.
     */
    distinct?: WebhookOutboxScalarFieldEnum | WebhookOutboxScalarFieldEnum[]
  }

  /**
   * WebhookOutbox create
   */
  export type WebhookOutboxCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookOutbox
     */
    select?: WebhookOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookOutbox
     */
    omit?: WebhookOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookOutboxInclude<ExtArgs> | null
    /**
     * The data needed to create a WebhookOutbox.
     */
    data: XOR<WebhookOutboxCreateInput, WebhookOutboxUncheckedCreateInput>
  }

  /**
   * WebhookOutbox createMany
   */
  export type WebhookOutboxCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WebhookOutboxes.
     */
    data: WebhookOutboxCreateManyInput | WebhookOutboxCreateManyInput[]
  }

  /**
   * WebhookOutbox update
   */
  export type WebhookOutboxUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookOutbox
     */
    select?: WebhookOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookOutbox
     */
    omit?: WebhookOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookOutboxInclude<ExtArgs> | null
    /**
     * The data needed to update a WebhookOutbox.
     */
    data: XOR<WebhookOutboxUpdateInput, WebhookOutboxUncheckedUpdateInput>
    /**
     * Choose, which WebhookOutbox to update.
     */
    where: WebhookOutboxWhereUniqueInput
  }

  /**
   * WebhookOutbox updateMany
   */
  export type WebhookOutboxUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WebhookOutboxes.
     */
    data: XOR<WebhookOutboxUpdateManyMutationInput, WebhookOutboxUncheckedUpdateManyInput>
    /**
     * Filter which WebhookOutboxes to update
     */
    where?: WebhookOutboxWhereInput
    /**
     * Limit how many WebhookOutboxes to update.
     */
    limit?: number
  }

  /**
   * WebhookOutbox upsert
   */
  export type WebhookOutboxUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookOutbox
     */
    select?: WebhookOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookOutbox
     */
    omit?: WebhookOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookOutboxInclude<ExtArgs> | null
    /**
     * The filter to search for the WebhookOutbox to update in case it exists.
     */
    where: WebhookOutboxWhereUniqueInput
    /**
     * In case the WebhookOutbox found by the `where` argument doesn't exist, create a new WebhookOutbox with this data.
     */
    create: XOR<WebhookOutboxCreateInput, WebhookOutboxUncheckedCreateInput>
    /**
     * In case the WebhookOutbox was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebhookOutboxUpdateInput, WebhookOutboxUncheckedUpdateInput>
  }

  /**
   * WebhookOutbox delete
   */
  export type WebhookOutboxDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookOutbox
     */
    select?: WebhookOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookOutbox
     */
    omit?: WebhookOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookOutboxInclude<ExtArgs> | null
    /**
     * Filter which WebhookOutbox to delete.
     */
    where: WebhookOutboxWhereUniqueInput
  }

  /**
   * WebhookOutbox deleteMany
   */
  export type WebhookOutboxDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookOutboxes to delete
     */
    where?: WebhookOutboxWhereInput
    /**
     * Limit how many WebhookOutboxes to delete.
     */
    limit?: number
  }

  /**
   * WebhookOutbox without action
   */
  export type WebhookOutboxDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookOutbox
     */
    select?: WebhookOutboxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookOutbox
     */
    omit?: WebhookOutboxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookOutboxInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TipoClienteScalarFieldEnum: {
    id: 'id',
    codigo: 'codigo',
    descripcion: 'descripcion',
    activo: 'activo',
    fechaRegistro: 'fechaRegistro'
  };

  export type TipoClienteScalarFieldEnum = (typeof TipoClienteScalarFieldEnum)[keyof typeof TipoClienteScalarFieldEnum]


  export const TipoDocumentoScalarFieldEnum: {
    id: 'id',
    codigo: 'codigo',
    descripcion: 'descripcion',
    activo: 'activo',
    fechaRegistro: 'fechaRegistro'
  };

  export type TipoDocumentoScalarFieldEnum = (typeof TipoDocumentoScalarFieldEnum)[keyof typeof TipoDocumentoScalarFieldEnum]


  export const TipoCreditoScalarFieldEnum: {
    id: 'id',
    codigo: 'codigo',
    descripcion: 'descripcion',
    activo: 'activo',
    fechaRegistro: 'fechaRegistro'
  };

  export type TipoCreditoScalarFieldEnum = (typeof TipoCreditoScalarFieldEnum)[keyof typeof TipoCreditoScalarFieldEnum]


  export const EstadoCreditoScalarFieldEnum: {
    id: 'id',
    codigo: 'codigo',
    descripcion: 'descripcion',
    activo: 'activo',
    fechaRegistro: 'fechaRegistro'
  };

  export type EstadoCreditoScalarFieldEnum = (typeof EstadoCreditoScalarFieldEnum)[keyof typeof EstadoCreditoScalarFieldEnum]


  export const MetodoPagoScalarFieldEnum: {
    id: 'id',
    codigo: 'codigo',
    descripcion: 'descripcion',
    activo: 'activo',
    fechaRegistro: 'fechaRegistro'
  };

  export type MetodoPagoScalarFieldEnum = (typeof MetodoPagoScalarFieldEnum)[keyof typeof MetodoPagoScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    id: 'id',
    documento: 'documento',
    nombres: 'nombres',
    apellidos: 'apellidos',
    idTipoDocumento: 'idTipoDocumento',
    idTipoCliente: 'idTipoCliente',
    activo: 'activo',
    fechaRegistro: 'fechaRegistro'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const AsesorScalarFieldEnum: {
    id: 'id',
    documento: 'documento',
    nombre: 'nombre',
    activo: 'activo'
  };

  export type AsesorScalarFieldEnum = (typeof AsesorScalarFieldEnum)[keyof typeof AsesorScalarFieldEnum]


  export const CreditoAsociadoScalarFieldEnum: {
    id: 'id',
    numeroCredito: 'numeroCredito',
    identificacionAsociado: 'identificacionAsociado',
    nombreAsociado: 'nombreAsociado',
    idCliente: 'idCliente',
    idTipoCredito: 'idTipoCredito',
    idFormaPago: 'idFormaPago',
    idEstadoCredito: 'idEstadoCredito',
    idAsesor: 'idAsesor',
    valorSolicitado: 'valorSolicitado',
    tasaInteres: 'tasaInteres',
    numeroCuotas: 'numeroCuotas',
    entidadId: 'entidadId',
    activo: 'activo',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy',
    fechaSolicitud: 'fechaSolicitud',
    fechaActualizacion: 'fechaActualizacion'
  };

  export type CreditoAsociadoScalarFieldEnum = (typeof CreditoAsociadoScalarFieldEnum)[keyof typeof CreditoAsociadoScalarFieldEnum]


  export const HistorialCreditoScalarFieldEnum: {
    id: 'id',
    idCredito: 'idCredito',
    tipoCambio: 'tipoCambio',
    idEstadoAnterior: 'idEstadoAnterior',
    idEstadoNuevo: 'idEstadoNuevo',
    estadoAnterior: 'estadoAnterior',
    estadoNuevo: 'estadoNuevo',
    usuario: 'usuario',
    observacion: 'observacion',
    camposModificados: 'camposModificados',
    fecha: 'fecha'
  };

  export type HistorialCreditoScalarFieldEnum = (typeof HistorialCreditoScalarFieldEnum)[keyof typeof HistorialCreditoScalarFieldEnum]


  export const WebhookOutboxScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    eventType: 'eventType',
    idCredito: 'idCredito',
    entidadId: 'entidadId',
    payload: 'payload',
    estado: 'estado',
    intentos: 'intentos',
    ultimoError: 'ultimoError',
    proximoIntento: 'proximoIntento',
    fechaCreacion: 'fechaCreacion',
    fechaEnvio: 'fechaEnvio'
  };

  export type WebhookOutboxScalarFieldEnum = (typeof WebhookOutboxScalarFieldEnum)[keyof typeof WebhookOutboxScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type TipoClienteWhereInput = {
    AND?: TipoClienteWhereInput | TipoClienteWhereInput[]
    OR?: TipoClienteWhereInput[]
    NOT?: TipoClienteWhereInput | TipoClienteWhereInput[]
    id?: IntFilter<"TipoCliente"> | number
    codigo?: StringFilter<"TipoCliente"> | string
    descripcion?: StringFilter<"TipoCliente"> | string
    activo?: BoolFilter<"TipoCliente"> | boolean
    fechaRegistro?: DateTimeFilter<"TipoCliente"> | Date | string
    clientes?: ClienteListRelationFilter
  }

  export type TipoClienteOrderByWithRelationInput = {
    id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    fechaRegistro?: SortOrder
    clientes?: ClienteOrderByRelationAggregateInput
  }

  export type TipoClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    codigo?: string
    AND?: TipoClienteWhereInput | TipoClienteWhereInput[]
    OR?: TipoClienteWhereInput[]
    NOT?: TipoClienteWhereInput | TipoClienteWhereInput[]
    descripcion?: StringFilter<"TipoCliente"> | string
    activo?: BoolFilter<"TipoCliente"> | boolean
    fechaRegistro?: DateTimeFilter<"TipoCliente"> | Date | string
    clientes?: ClienteListRelationFilter
  }, "id" | "codigo">

  export type TipoClienteOrderByWithAggregationInput = {
    id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    fechaRegistro?: SortOrder
    _count?: TipoClienteCountOrderByAggregateInput
    _avg?: TipoClienteAvgOrderByAggregateInput
    _max?: TipoClienteMaxOrderByAggregateInput
    _min?: TipoClienteMinOrderByAggregateInput
    _sum?: TipoClienteSumOrderByAggregateInput
  }

  export type TipoClienteScalarWhereWithAggregatesInput = {
    AND?: TipoClienteScalarWhereWithAggregatesInput | TipoClienteScalarWhereWithAggregatesInput[]
    OR?: TipoClienteScalarWhereWithAggregatesInput[]
    NOT?: TipoClienteScalarWhereWithAggregatesInput | TipoClienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TipoCliente"> | number
    codigo?: StringWithAggregatesFilter<"TipoCliente"> | string
    descripcion?: StringWithAggregatesFilter<"TipoCliente"> | string
    activo?: BoolWithAggregatesFilter<"TipoCliente"> | boolean
    fechaRegistro?: DateTimeWithAggregatesFilter<"TipoCliente"> | Date | string
  }

  export type TipoDocumentoWhereInput = {
    AND?: TipoDocumentoWhereInput | TipoDocumentoWhereInput[]
    OR?: TipoDocumentoWhereInput[]
    NOT?: TipoDocumentoWhereInput | TipoDocumentoWhereInput[]
    id?: IntFilter<"TipoDocumento"> | number
    codigo?: StringFilter<"TipoDocumento"> | string
    descripcion?: StringFilter<"TipoDocumento"> | string
    activo?: BoolFilter<"TipoDocumento"> | boolean
    fechaRegistro?: DateTimeFilter<"TipoDocumento"> | Date | string
    clientes?: ClienteListRelationFilter
  }

  export type TipoDocumentoOrderByWithRelationInput = {
    id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    fechaRegistro?: SortOrder
    clientes?: ClienteOrderByRelationAggregateInput
  }

  export type TipoDocumentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    codigo?: string
    AND?: TipoDocumentoWhereInput | TipoDocumentoWhereInput[]
    OR?: TipoDocumentoWhereInput[]
    NOT?: TipoDocumentoWhereInput | TipoDocumentoWhereInput[]
    descripcion?: StringFilter<"TipoDocumento"> | string
    activo?: BoolFilter<"TipoDocumento"> | boolean
    fechaRegistro?: DateTimeFilter<"TipoDocumento"> | Date | string
    clientes?: ClienteListRelationFilter
  }, "id" | "codigo">

  export type TipoDocumentoOrderByWithAggregationInput = {
    id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    fechaRegistro?: SortOrder
    _count?: TipoDocumentoCountOrderByAggregateInput
    _avg?: TipoDocumentoAvgOrderByAggregateInput
    _max?: TipoDocumentoMaxOrderByAggregateInput
    _min?: TipoDocumentoMinOrderByAggregateInput
    _sum?: TipoDocumentoSumOrderByAggregateInput
  }

  export type TipoDocumentoScalarWhereWithAggregatesInput = {
    AND?: TipoDocumentoScalarWhereWithAggregatesInput | TipoDocumentoScalarWhereWithAggregatesInput[]
    OR?: TipoDocumentoScalarWhereWithAggregatesInput[]
    NOT?: TipoDocumentoScalarWhereWithAggregatesInput | TipoDocumentoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TipoDocumento"> | number
    codigo?: StringWithAggregatesFilter<"TipoDocumento"> | string
    descripcion?: StringWithAggregatesFilter<"TipoDocumento"> | string
    activo?: BoolWithAggregatesFilter<"TipoDocumento"> | boolean
    fechaRegistro?: DateTimeWithAggregatesFilter<"TipoDocumento"> | Date | string
  }

  export type TipoCreditoWhereInput = {
    AND?: TipoCreditoWhereInput | TipoCreditoWhereInput[]
    OR?: TipoCreditoWhereInput[]
    NOT?: TipoCreditoWhereInput | TipoCreditoWhereInput[]
    id?: IntFilter<"TipoCredito"> | number
    codigo?: StringFilter<"TipoCredito"> | string
    descripcion?: StringFilter<"TipoCredito"> | string
    activo?: BoolFilter<"TipoCredito"> | boolean
    fechaRegistro?: DateTimeFilter<"TipoCredito"> | Date | string
    creditos?: CreditoAsociadoListRelationFilter
  }

  export type TipoCreditoOrderByWithRelationInput = {
    id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    fechaRegistro?: SortOrder
    creditos?: CreditoAsociadoOrderByRelationAggregateInput
  }

  export type TipoCreditoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    codigo?: string
    AND?: TipoCreditoWhereInput | TipoCreditoWhereInput[]
    OR?: TipoCreditoWhereInput[]
    NOT?: TipoCreditoWhereInput | TipoCreditoWhereInput[]
    descripcion?: StringFilter<"TipoCredito"> | string
    activo?: BoolFilter<"TipoCredito"> | boolean
    fechaRegistro?: DateTimeFilter<"TipoCredito"> | Date | string
    creditos?: CreditoAsociadoListRelationFilter
  }, "id" | "codigo">

  export type TipoCreditoOrderByWithAggregationInput = {
    id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    fechaRegistro?: SortOrder
    _count?: TipoCreditoCountOrderByAggregateInput
    _avg?: TipoCreditoAvgOrderByAggregateInput
    _max?: TipoCreditoMaxOrderByAggregateInput
    _min?: TipoCreditoMinOrderByAggregateInput
    _sum?: TipoCreditoSumOrderByAggregateInput
  }

  export type TipoCreditoScalarWhereWithAggregatesInput = {
    AND?: TipoCreditoScalarWhereWithAggregatesInput | TipoCreditoScalarWhereWithAggregatesInput[]
    OR?: TipoCreditoScalarWhereWithAggregatesInput[]
    NOT?: TipoCreditoScalarWhereWithAggregatesInput | TipoCreditoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TipoCredito"> | number
    codigo?: StringWithAggregatesFilter<"TipoCredito"> | string
    descripcion?: StringWithAggregatesFilter<"TipoCredito"> | string
    activo?: BoolWithAggregatesFilter<"TipoCredito"> | boolean
    fechaRegistro?: DateTimeWithAggregatesFilter<"TipoCredito"> | Date | string
  }

  export type EstadoCreditoWhereInput = {
    AND?: EstadoCreditoWhereInput | EstadoCreditoWhereInput[]
    OR?: EstadoCreditoWhereInput[]
    NOT?: EstadoCreditoWhereInput | EstadoCreditoWhereInput[]
    id?: IntFilter<"EstadoCredito"> | number
    codigo?: StringFilter<"EstadoCredito"> | string
    descripcion?: StringFilter<"EstadoCredito"> | string
    activo?: BoolFilter<"EstadoCredito"> | boolean
    fechaRegistro?: DateTimeFilter<"EstadoCredito"> | Date | string
    creditos?: CreditoAsociadoListRelationFilter
    historialOrigen?: HistorialCreditoListRelationFilter
    historialDestino?: HistorialCreditoListRelationFilter
  }

  export type EstadoCreditoOrderByWithRelationInput = {
    id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    fechaRegistro?: SortOrder
    creditos?: CreditoAsociadoOrderByRelationAggregateInput
    historialOrigen?: HistorialCreditoOrderByRelationAggregateInput
    historialDestino?: HistorialCreditoOrderByRelationAggregateInput
  }

  export type EstadoCreditoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    codigo?: string
    AND?: EstadoCreditoWhereInput | EstadoCreditoWhereInput[]
    OR?: EstadoCreditoWhereInput[]
    NOT?: EstadoCreditoWhereInput | EstadoCreditoWhereInput[]
    descripcion?: StringFilter<"EstadoCredito"> | string
    activo?: BoolFilter<"EstadoCredito"> | boolean
    fechaRegistro?: DateTimeFilter<"EstadoCredito"> | Date | string
    creditos?: CreditoAsociadoListRelationFilter
    historialOrigen?: HistorialCreditoListRelationFilter
    historialDestino?: HistorialCreditoListRelationFilter
  }, "id" | "codigo">

  export type EstadoCreditoOrderByWithAggregationInput = {
    id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    fechaRegistro?: SortOrder
    _count?: EstadoCreditoCountOrderByAggregateInput
    _avg?: EstadoCreditoAvgOrderByAggregateInput
    _max?: EstadoCreditoMaxOrderByAggregateInput
    _min?: EstadoCreditoMinOrderByAggregateInput
    _sum?: EstadoCreditoSumOrderByAggregateInput
  }

  export type EstadoCreditoScalarWhereWithAggregatesInput = {
    AND?: EstadoCreditoScalarWhereWithAggregatesInput | EstadoCreditoScalarWhereWithAggregatesInput[]
    OR?: EstadoCreditoScalarWhereWithAggregatesInput[]
    NOT?: EstadoCreditoScalarWhereWithAggregatesInput | EstadoCreditoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EstadoCredito"> | number
    codigo?: StringWithAggregatesFilter<"EstadoCredito"> | string
    descripcion?: StringWithAggregatesFilter<"EstadoCredito"> | string
    activo?: BoolWithAggregatesFilter<"EstadoCredito"> | boolean
    fechaRegistro?: DateTimeWithAggregatesFilter<"EstadoCredito"> | Date | string
  }

  export type MetodoPagoWhereInput = {
    AND?: MetodoPagoWhereInput | MetodoPagoWhereInput[]
    OR?: MetodoPagoWhereInput[]
    NOT?: MetodoPagoWhereInput | MetodoPagoWhereInput[]
    id?: IntFilter<"MetodoPago"> | number
    codigo?: StringFilter<"MetodoPago"> | string
    descripcion?: StringFilter<"MetodoPago"> | string
    activo?: BoolFilter<"MetodoPago"> | boolean
    fechaRegistro?: DateTimeFilter<"MetodoPago"> | Date | string
    creditos?: CreditoAsociadoListRelationFilter
  }

  export type MetodoPagoOrderByWithRelationInput = {
    id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    fechaRegistro?: SortOrder
    creditos?: CreditoAsociadoOrderByRelationAggregateInput
  }

  export type MetodoPagoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    codigo?: string
    AND?: MetodoPagoWhereInput | MetodoPagoWhereInput[]
    OR?: MetodoPagoWhereInput[]
    NOT?: MetodoPagoWhereInput | MetodoPagoWhereInput[]
    descripcion?: StringFilter<"MetodoPago"> | string
    activo?: BoolFilter<"MetodoPago"> | boolean
    fechaRegistro?: DateTimeFilter<"MetodoPago"> | Date | string
    creditos?: CreditoAsociadoListRelationFilter
  }, "id" | "codigo">

  export type MetodoPagoOrderByWithAggregationInput = {
    id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    fechaRegistro?: SortOrder
    _count?: MetodoPagoCountOrderByAggregateInput
    _avg?: MetodoPagoAvgOrderByAggregateInput
    _max?: MetodoPagoMaxOrderByAggregateInput
    _min?: MetodoPagoMinOrderByAggregateInput
    _sum?: MetodoPagoSumOrderByAggregateInput
  }

  export type MetodoPagoScalarWhereWithAggregatesInput = {
    AND?: MetodoPagoScalarWhereWithAggregatesInput | MetodoPagoScalarWhereWithAggregatesInput[]
    OR?: MetodoPagoScalarWhereWithAggregatesInput[]
    NOT?: MetodoPagoScalarWhereWithAggregatesInput | MetodoPagoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MetodoPago"> | number
    codigo?: StringWithAggregatesFilter<"MetodoPago"> | string
    descripcion?: StringWithAggregatesFilter<"MetodoPago"> | string
    activo?: BoolWithAggregatesFilter<"MetodoPago"> | boolean
    fechaRegistro?: DateTimeWithAggregatesFilter<"MetodoPago"> | Date | string
  }

  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: IntFilter<"Cliente"> | number
    documento?: StringFilter<"Cliente"> | string
    nombres?: StringFilter<"Cliente"> | string
    apellidos?: StringFilter<"Cliente"> | string
    idTipoDocumento?: IntFilter<"Cliente"> | number
    idTipoCliente?: IntFilter<"Cliente"> | number
    activo?: BoolFilter<"Cliente"> | boolean
    fechaRegistro?: DateTimeFilter<"Cliente"> | Date | string
    TipoDocumento?: XOR<TipoDocumentoScalarRelationFilter, TipoDocumentoWhereInput>
    TipoCliente?: XOR<TipoClienteScalarRelationFilter, TipoClienteWhereInput>
    creditos?: CreditoAsociadoListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    documento?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    idTipoDocumento?: SortOrder
    idTipoCliente?: SortOrder
    activo?: SortOrder
    fechaRegistro?: SortOrder
    TipoDocumento?: TipoDocumentoOrderByWithRelationInput
    TipoCliente?: TipoClienteOrderByWithRelationInput
    creditos?: CreditoAsociadoOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    idTipoDocumento_documento?: ClienteIdTipoDocumentoDocumentoCompoundUniqueInput
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    documento?: StringFilter<"Cliente"> | string
    nombres?: StringFilter<"Cliente"> | string
    apellidos?: StringFilter<"Cliente"> | string
    idTipoDocumento?: IntFilter<"Cliente"> | number
    idTipoCliente?: IntFilter<"Cliente"> | number
    activo?: BoolFilter<"Cliente"> | boolean
    fechaRegistro?: DateTimeFilter<"Cliente"> | Date | string
    TipoDocumento?: XOR<TipoDocumentoScalarRelationFilter, TipoDocumentoWhereInput>
    TipoCliente?: XOR<TipoClienteScalarRelationFilter, TipoClienteWhereInput>
    creditos?: CreditoAsociadoListRelationFilter
  }, "id" | "idTipoDocumento_documento">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    documento?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    idTipoDocumento?: SortOrder
    idTipoCliente?: SortOrder
    activo?: SortOrder
    fechaRegistro?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cliente"> | number
    documento?: StringWithAggregatesFilter<"Cliente"> | string
    nombres?: StringWithAggregatesFilter<"Cliente"> | string
    apellidos?: StringWithAggregatesFilter<"Cliente"> | string
    idTipoDocumento?: IntWithAggregatesFilter<"Cliente"> | number
    idTipoCliente?: IntWithAggregatesFilter<"Cliente"> | number
    activo?: BoolWithAggregatesFilter<"Cliente"> | boolean
    fechaRegistro?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
  }

  export type AsesorWhereInput = {
    AND?: AsesorWhereInput | AsesorWhereInput[]
    OR?: AsesorWhereInput[]
    NOT?: AsesorWhereInput | AsesorWhereInput[]
    id?: IntFilter<"Asesor"> | number
    documento?: StringFilter<"Asesor"> | string
    nombre?: StringFilter<"Asesor"> | string
    activo?: BoolFilter<"Asesor"> | boolean
    creditos?: CreditoAsociadoListRelationFilter
  }

  export type AsesorOrderByWithRelationInput = {
    id?: SortOrder
    documento?: SortOrder
    nombre?: SortOrder
    activo?: SortOrder
    creditos?: CreditoAsociadoOrderByRelationAggregateInput
  }

  export type AsesorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    documento?: string
    AND?: AsesorWhereInput | AsesorWhereInput[]
    OR?: AsesorWhereInput[]
    NOT?: AsesorWhereInput | AsesorWhereInput[]
    nombre?: StringFilter<"Asesor"> | string
    activo?: BoolFilter<"Asesor"> | boolean
    creditos?: CreditoAsociadoListRelationFilter
  }, "id" | "documento">

  export type AsesorOrderByWithAggregationInput = {
    id?: SortOrder
    documento?: SortOrder
    nombre?: SortOrder
    activo?: SortOrder
    _count?: AsesorCountOrderByAggregateInput
    _avg?: AsesorAvgOrderByAggregateInput
    _max?: AsesorMaxOrderByAggregateInput
    _min?: AsesorMinOrderByAggregateInput
    _sum?: AsesorSumOrderByAggregateInput
  }

  export type AsesorScalarWhereWithAggregatesInput = {
    AND?: AsesorScalarWhereWithAggregatesInput | AsesorScalarWhereWithAggregatesInput[]
    OR?: AsesorScalarWhereWithAggregatesInput[]
    NOT?: AsesorScalarWhereWithAggregatesInput | AsesorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Asesor"> | number
    documento?: StringWithAggregatesFilter<"Asesor"> | string
    nombre?: StringWithAggregatesFilter<"Asesor"> | string
    activo?: BoolWithAggregatesFilter<"Asesor"> | boolean
  }

  export type CreditoAsociadoWhereInput = {
    AND?: CreditoAsociadoWhereInput | CreditoAsociadoWhereInput[]
    OR?: CreditoAsociadoWhereInput[]
    NOT?: CreditoAsociadoWhereInput | CreditoAsociadoWhereInput[]
    id?: IntFilter<"CreditoAsociado"> | number
    numeroCredito?: StringFilter<"CreditoAsociado"> | string
    identificacionAsociado?: StringFilter<"CreditoAsociado"> | string
    nombreAsociado?: StringFilter<"CreditoAsociado"> | string
    idCliente?: IntFilter<"CreditoAsociado"> | number
    idTipoCredito?: IntFilter<"CreditoAsociado"> | number
    idFormaPago?: IntFilter<"CreditoAsociado"> | number
    idEstadoCredito?: IntFilter<"CreditoAsociado"> | number
    idAsesor?: IntNullableFilter<"CreditoAsociado"> | number | null
    valorSolicitado?: DecimalFilter<"CreditoAsociado"> | Decimal | DecimalJsLike | number | string
    tasaInteres?: DecimalFilter<"CreditoAsociado"> | Decimal | DecimalJsLike | number | string
    numeroCuotas?: IntFilter<"CreditoAsociado"> | number
    entidadId?: IntFilter<"CreditoAsociado"> | number
    activo?: BoolFilter<"CreditoAsociado"> | boolean
    createdBy?: StringFilter<"CreditoAsociado"> | string
    updatedBy?: StringNullableFilter<"CreditoAsociado"> | string | null
    fechaSolicitud?: DateTimeFilter<"CreditoAsociado"> | Date | string
    fechaActualizacion?: DateTimeFilter<"CreditoAsociado"> | Date | string
    Cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    TipoCredito?: XOR<TipoCreditoScalarRelationFilter, TipoCreditoWhereInput>
    FormaPago?: XOR<MetodoPagoScalarRelationFilter, MetodoPagoWhereInput>
    Estado?: XOR<EstadoCreditoScalarRelationFilter, EstadoCreditoWhereInput>
    Asesor?: XOR<AsesorNullableScalarRelationFilter, AsesorWhereInput> | null
    historial?: HistorialCreditoListRelationFilter
    webhookOutbox?: WebhookOutboxListRelationFilter
  }

  export type CreditoAsociadoOrderByWithRelationInput = {
    id?: SortOrder
    numeroCredito?: SortOrder
    identificacionAsociado?: SortOrder
    nombreAsociado?: SortOrder
    idCliente?: SortOrder
    idTipoCredito?: SortOrder
    idFormaPago?: SortOrder
    idEstadoCredito?: SortOrder
    idAsesor?: SortOrderInput | SortOrder
    valorSolicitado?: SortOrder
    tasaInteres?: SortOrder
    numeroCuotas?: SortOrder
    entidadId?: SortOrder
    activo?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    fechaSolicitud?: SortOrder
    fechaActualizacion?: SortOrder
    Cliente?: ClienteOrderByWithRelationInput
    TipoCredito?: TipoCreditoOrderByWithRelationInput
    FormaPago?: MetodoPagoOrderByWithRelationInput
    Estado?: EstadoCreditoOrderByWithRelationInput
    Asesor?: AsesorOrderByWithRelationInput
    historial?: HistorialCreditoOrderByRelationAggregateInput
    webhookOutbox?: WebhookOutboxOrderByRelationAggregateInput
  }

  export type CreditoAsociadoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    numeroCredito?: string
    AND?: CreditoAsociadoWhereInput | CreditoAsociadoWhereInput[]
    OR?: CreditoAsociadoWhereInput[]
    NOT?: CreditoAsociadoWhereInput | CreditoAsociadoWhereInput[]
    identificacionAsociado?: StringFilter<"CreditoAsociado"> | string
    nombreAsociado?: StringFilter<"CreditoAsociado"> | string
    idCliente?: IntFilter<"CreditoAsociado"> | number
    idTipoCredito?: IntFilter<"CreditoAsociado"> | number
    idFormaPago?: IntFilter<"CreditoAsociado"> | number
    idEstadoCredito?: IntFilter<"CreditoAsociado"> | number
    idAsesor?: IntNullableFilter<"CreditoAsociado"> | number | null
    valorSolicitado?: DecimalFilter<"CreditoAsociado"> | Decimal | DecimalJsLike | number | string
    tasaInteres?: DecimalFilter<"CreditoAsociado"> | Decimal | DecimalJsLike | number | string
    numeroCuotas?: IntFilter<"CreditoAsociado"> | number
    entidadId?: IntFilter<"CreditoAsociado"> | number
    activo?: BoolFilter<"CreditoAsociado"> | boolean
    createdBy?: StringFilter<"CreditoAsociado"> | string
    updatedBy?: StringNullableFilter<"CreditoAsociado"> | string | null
    fechaSolicitud?: DateTimeFilter<"CreditoAsociado"> | Date | string
    fechaActualizacion?: DateTimeFilter<"CreditoAsociado"> | Date | string
    Cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    TipoCredito?: XOR<TipoCreditoScalarRelationFilter, TipoCreditoWhereInput>
    FormaPago?: XOR<MetodoPagoScalarRelationFilter, MetodoPagoWhereInput>
    Estado?: XOR<EstadoCreditoScalarRelationFilter, EstadoCreditoWhereInput>
    Asesor?: XOR<AsesorNullableScalarRelationFilter, AsesorWhereInput> | null
    historial?: HistorialCreditoListRelationFilter
    webhookOutbox?: WebhookOutboxListRelationFilter
  }, "id" | "numeroCredito">

  export type CreditoAsociadoOrderByWithAggregationInput = {
    id?: SortOrder
    numeroCredito?: SortOrder
    identificacionAsociado?: SortOrder
    nombreAsociado?: SortOrder
    idCliente?: SortOrder
    idTipoCredito?: SortOrder
    idFormaPago?: SortOrder
    idEstadoCredito?: SortOrder
    idAsesor?: SortOrderInput | SortOrder
    valorSolicitado?: SortOrder
    tasaInteres?: SortOrder
    numeroCuotas?: SortOrder
    entidadId?: SortOrder
    activo?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    fechaSolicitud?: SortOrder
    fechaActualizacion?: SortOrder
    _count?: CreditoAsociadoCountOrderByAggregateInput
    _avg?: CreditoAsociadoAvgOrderByAggregateInput
    _max?: CreditoAsociadoMaxOrderByAggregateInput
    _min?: CreditoAsociadoMinOrderByAggregateInput
    _sum?: CreditoAsociadoSumOrderByAggregateInput
  }

  export type CreditoAsociadoScalarWhereWithAggregatesInput = {
    AND?: CreditoAsociadoScalarWhereWithAggregatesInput | CreditoAsociadoScalarWhereWithAggregatesInput[]
    OR?: CreditoAsociadoScalarWhereWithAggregatesInput[]
    NOT?: CreditoAsociadoScalarWhereWithAggregatesInput | CreditoAsociadoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CreditoAsociado"> | number
    numeroCredito?: StringWithAggregatesFilter<"CreditoAsociado"> | string
    identificacionAsociado?: StringWithAggregatesFilter<"CreditoAsociado"> | string
    nombreAsociado?: StringWithAggregatesFilter<"CreditoAsociado"> | string
    idCliente?: IntWithAggregatesFilter<"CreditoAsociado"> | number
    idTipoCredito?: IntWithAggregatesFilter<"CreditoAsociado"> | number
    idFormaPago?: IntWithAggregatesFilter<"CreditoAsociado"> | number
    idEstadoCredito?: IntWithAggregatesFilter<"CreditoAsociado"> | number
    idAsesor?: IntNullableWithAggregatesFilter<"CreditoAsociado"> | number | null
    valorSolicitado?: DecimalWithAggregatesFilter<"CreditoAsociado"> | Decimal | DecimalJsLike | number | string
    tasaInteres?: DecimalWithAggregatesFilter<"CreditoAsociado"> | Decimal | DecimalJsLike | number | string
    numeroCuotas?: IntWithAggregatesFilter<"CreditoAsociado"> | number
    entidadId?: IntWithAggregatesFilter<"CreditoAsociado"> | number
    activo?: BoolWithAggregatesFilter<"CreditoAsociado"> | boolean
    createdBy?: StringWithAggregatesFilter<"CreditoAsociado"> | string
    updatedBy?: StringNullableWithAggregatesFilter<"CreditoAsociado"> | string | null
    fechaSolicitud?: DateTimeWithAggregatesFilter<"CreditoAsociado"> | Date | string
    fechaActualizacion?: DateTimeWithAggregatesFilter<"CreditoAsociado"> | Date | string
  }

  export type HistorialCreditoWhereInput = {
    AND?: HistorialCreditoWhereInput | HistorialCreditoWhereInput[]
    OR?: HistorialCreditoWhereInput[]
    NOT?: HistorialCreditoWhereInput | HistorialCreditoWhereInput[]
    id?: IntFilter<"HistorialCredito"> | number
    idCredito?: IntFilter<"HistorialCredito"> | number
    tipoCambio?: StringFilter<"HistorialCredito"> | string
    idEstadoAnterior?: IntNullableFilter<"HistorialCredito"> | number | null
    idEstadoNuevo?: IntFilter<"HistorialCredito"> | number
    estadoAnterior?: StringNullableFilter<"HistorialCredito"> | string | null
    estadoNuevo?: StringFilter<"HistorialCredito"> | string
    usuario?: StringFilter<"HistorialCredito"> | string
    observacion?: StringNullableFilter<"HistorialCredito"> | string | null
    camposModificados?: StringNullableFilter<"HistorialCredito"> | string | null
    fecha?: DateTimeFilter<"HistorialCredito"> | Date | string
    Credito?: XOR<CreditoAsociadoScalarRelationFilter, CreditoAsociadoWhereInput>
    EstadoAnterior?: XOR<EstadoCreditoNullableScalarRelationFilter, EstadoCreditoWhereInput> | null
    EstadoNuevo?: XOR<EstadoCreditoScalarRelationFilter, EstadoCreditoWhereInput>
  }

  export type HistorialCreditoOrderByWithRelationInput = {
    id?: SortOrder
    idCredito?: SortOrder
    tipoCambio?: SortOrder
    idEstadoAnterior?: SortOrderInput | SortOrder
    idEstadoNuevo?: SortOrder
    estadoAnterior?: SortOrderInput | SortOrder
    estadoNuevo?: SortOrder
    usuario?: SortOrder
    observacion?: SortOrderInput | SortOrder
    camposModificados?: SortOrderInput | SortOrder
    fecha?: SortOrder
    Credito?: CreditoAsociadoOrderByWithRelationInput
    EstadoAnterior?: EstadoCreditoOrderByWithRelationInput
    EstadoNuevo?: EstadoCreditoOrderByWithRelationInput
  }

  export type HistorialCreditoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HistorialCreditoWhereInput | HistorialCreditoWhereInput[]
    OR?: HistorialCreditoWhereInput[]
    NOT?: HistorialCreditoWhereInput | HistorialCreditoWhereInput[]
    idCredito?: IntFilter<"HistorialCredito"> | number
    tipoCambio?: StringFilter<"HistorialCredito"> | string
    idEstadoAnterior?: IntNullableFilter<"HistorialCredito"> | number | null
    idEstadoNuevo?: IntFilter<"HistorialCredito"> | number
    estadoAnterior?: StringNullableFilter<"HistorialCredito"> | string | null
    estadoNuevo?: StringFilter<"HistorialCredito"> | string
    usuario?: StringFilter<"HistorialCredito"> | string
    observacion?: StringNullableFilter<"HistorialCredito"> | string | null
    camposModificados?: StringNullableFilter<"HistorialCredito"> | string | null
    fecha?: DateTimeFilter<"HistorialCredito"> | Date | string
    Credito?: XOR<CreditoAsociadoScalarRelationFilter, CreditoAsociadoWhereInput>
    EstadoAnterior?: XOR<EstadoCreditoNullableScalarRelationFilter, EstadoCreditoWhereInput> | null
    EstadoNuevo?: XOR<EstadoCreditoScalarRelationFilter, EstadoCreditoWhereInput>
  }, "id">

  export type HistorialCreditoOrderByWithAggregationInput = {
    id?: SortOrder
    idCredito?: SortOrder
    tipoCambio?: SortOrder
    idEstadoAnterior?: SortOrderInput | SortOrder
    idEstadoNuevo?: SortOrder
    estadoAnterior?: SortOrderInput | SortOrder
    estadoNuevo?: SortOrder
    usuario?: SortOrder
    observacion?: SortOrderInput | SortOrder
    camposModificados?: SortOrderInput | SortOrder
    fecha?: SortOrder
    _count?: HistorialCreditoCountOrderByAggregateInput
    _avg?: HistorialCreditoAvgOrderByAggregateInput
    _max?: HistorialCreditoMaxOrderByAggregateInput
    _min?: HistorialCreditoMinOrderByAggregateInput
    _sum?: HistorialCreditoSumOrderByAggregateInput
  }

  export type HistorialCreditoScalarWhereWithAggregatesInput = {
    AND?: HistorialCreditoScalarWhereWithAggregatesInput | HistorialCreditoScalarWhereWithAggregatesInput[]
    OR?: HistorialCreditoScalarWhereWithAggregatesInput[]
    NOT?: HistorialCreditoScalarWhereWithAggregatesInput | HistorialCreditoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HistorialCredito"> | number
    idCredito?: IntWithAggregatesFilter<"HistorialCredito"> | number
    tipoCambio?: StringWithAggregatesFilter<"HistorialCredito"> | string
    idEstadoAnterior?: IntNullableWithAggregatesFilter<"HistorialCredito"> | number | null
    idEstadoNuevo?: IntWithAggregatesFilter<"HistorialCredito"> | number
    estadoAnterior?: StringNullableWithAggregatesFilter<"HistorialCredito"> | string | null
    estadoNuevo?: StringWithAggregatesFilter<"HistorialCredito"> | string
    usuario?: StringWithAggregatesFilter<"HistorialCredito"> | string
    observacion?: StringNullableWithAggregatesFilter<"HistorialCredito"> | string | null
    camposModificados?: StringNullableWithAggregatesFilter<"HistorialCredito"> | string | null
    fecha?: DateTimeWithAggregatesFilter<"HistorialCredito"> | Date | string
  }

  export type WebhookOutboxWhereInput = {
    AND?: WebhookOutboxWhereInput | WebhookOutboxWhereInput[]
    OR?: WebhookOutboxWhereInput[]
    NOT?: WebhookOutboxWhereInput | WebhookOutboxWhereInput[]
    id?: IntFilter<"WebhookOutbox"> | number
    eventId?: StringFilter<"WebhookOutbox"> | string
    eventType?: StringFilter<"WebhookOutbox"> | string
    idCredito?: IntFilter<"WebhookOutbox"> | number
    entidadId?: IntFilter<"WebhookOutbox"> | number
    payload?: StringFilter<"WebhookOutbox"> | string
    estado?: StringFilter<"WebhookOutbox"> | string
    intentos?: IntFilter<"WebhookOutbox"> | number
    ultimoError?: StringNullableFilter<"WebhookOutbox"> | string | null
    proximoIntento?: DateTimeFilter<"WebhookOutbox"> | Date | string
    fechaCreacion?: DateTimeFilter<"WebhookOutbox"> | Date | string
    fechaEnvio?: DateTimeNullableFilter<"WebhookOutbox"> | Date | string | null
    Credito?: XOR<CreditoAsociadoScalarRelationFilter, CreditoAsociadoWhereInput>
  }

  export type WebhookOutboxOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    eventType?: SortOrder
    idCredito?: SortOrder
    entidadId?: SortOrder
    payload?: SortOrder
    estado?: SortOrder
    intentos?: SortOrder
    ultimoError?: SortOrderInput | SortOrder
    proximoIntento?: SortOrder
    fechaCreacion?: SortOrder
    fechaEnvio?: SortOrderInput | SortOrder
    Credito?: CreditoAsociadoOrderByWithRelationInput
  }

  export type WebhookOutboxWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    eventId?: string
    AND?: WebhookOutboxWhereInput | WebhookOutboxWhereInput[]
    OR?: WebhookOutboxWhereInput[]
    NOT?: WebhookOutboxWhereInput | WebhookOutboxWhereInput[]
    eventType?: StringFilter<"WebhookOutbox"> | string
    idCredito?: IntFilter<"WebhookOutbox"> | number
    entidadId?: IntFilter<"WebhookOutbox"> | number
    payload?: StringFilter<"WebhookOutbox"> | string
    estado?: StringFilter<"WebhookOutbox"> | string
    intentos?: IntFilter<"WebhookOutbox"> | number
    ultimoError?: StringNullableFilter<"WebhookOutbox"> | string | null
    proximoIntento?: DateTimeFilter<"WebhookOutbox"> | Date | string
    fechaCreacion?: DateTimeFilter<"WebhookOutbox"> | Date | string
    fechaEnvio?: DateTimeNullableFilter<"WebhookOutbox"> | Date | string | null
    Credito?: XOR<CreditoAsociadoScalarRelationFilter, CreditoAsociadoWhereInput>
  }, "id" | "eventId">

  export type WebhookOutboxOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    eventType?: SortOrder
    idCredito?: SortOrder
    entidadId?: SortOrder
    payload?: SortOrder
    estado?: SortOrder
    intentos?: SortOrder
    ultimoError?: SortOrderInput | SortOrder
    proximoIntento?: SortOrder
    fechaCreacion?: SortOrder
    fechaEnvio?: SortOrderInput | SortOrder
    _count?: WebhookOutboxCountOrderByAggregateInput
    _avg?: WebhookOutboxAvgOrderByAggregateInput
    _max?: WebhookOutboxMaxOrderByAggregateInput
    _min?: WebhookOutboxMinOrderByAggregateInput
    _sum?: WebhookOutboxSumOrderByAggregateInput
  }

  export type WebhookOutboxScalarWhereWithAggregatesInput = {
    AND?: WebhookOutboxScalarWhereWithAggregatesInput | WebhookOutboxScalarWhereWithAggregatesInput[]
    OR?: WebhookOutboxScalarWhereWithAggregatesInput[]
    NOT?: WebhookOutboxScalarWhereWithAggregatesInput | WebhookOutboxScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WebhookOutbox"> | number
    eventId?: StringWithAggregatesFilter<"WebhookOutbox"> | string
    eventType?: StringWithAggregatesFilter<"WebhookOutbox"> | string
    idCredito?: IntWithAggregatesFilter<"WebhookOutbox"> | number
    entidadId?: IntWithAggregatesFilter<"WebhookOutbox"> | number
    payload?: StringWithAggregatesFilter<"WebhookOutbox"> | string
    estado?: StringWithAggregatesFilter<"WebhookOutbox"> | string
    intentos?: IntWithAggregatesFilter<"WebhookOutbox"> | number
    ultimoError?: StringNullableWithAggregatesFilter<"WebhookOutbox"> | string | null
    proximoIntento?: DateTimeWithAggregatesFilter<"WebhookOutbox"> | Date | string
    fechaCreacion?: DateTimeWithAggregatesFilter<"WebhookOutbox"> | Date | string
    fechaEnvio?: DateTimeNullableWithAggregatesFilter<"WebhookOutbox"> | Date | string | null
  }

  export type TipoClienteCreateInput = {
    codigo: string
    descripcion: string
    activo?: boolean
    fechaRegistro?: Date | string
    clientes?: ClienteCreateNestedManyWithoutTipoClienteInput
  }

  export type TipoClienteUncheckedCreateInput = {
    id?: number
    codigo: string
    descripcion: string
    activo?: boolean
    fechaRegistro?: Date | string
    clientes?: ClienteUncheckedCreateNestedManyWithoutTipoClienteInput
  }

  export type TipoClienteUpdateInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: ClienteUpdateManyWithoutTipoClienteNestedInput
  }

  export type TipoClienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: ClienteUncheckedUpdateManyWithoutTipoClienteNestedInput
  }

  export type TipoClienteCreateManyInput = {
    codigo: string
    descripcion: string
    activo?: boolean
    fechaRegistro?: Date | string
  }

  export type TipoClienteUpdateManyMutationInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoClienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoDocumentoCreateInput = {
    codigo: string
    descripcion: string
    activo?: boolean
    fechaRegistro?: Date | string
    clientes?: ClienteCreateNestedManyWithoutTipoDocumentoInput
  }

  export type TipoDocumentoUncheckedCreateInput = {
    id?: number
    codigo: string
    descripcion: string
    activo?: boolean
    fechaRegistro?: Date | string
    clientes?: ClienteUncheckedCreateNestedManyWithoutTipoDocumentoInput
  }

  export type TipoDocumentoUpdateInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: ClienteUpdateManyWithoutTipoDocumentoNestedInput
  }

  export type TipoDocumentoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: ClienteUncheckedUpdateManyWithoutTipoDocumentoNestedInput
  }

  export type TipoDocumentoCreateManyInput = {
    codigo: string
    descripcion: string
    activo?: boolean
    fechaRegistro?: Date | string
  }

  export type TipoDocumentoUpdateManyMutationInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoDocumentoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoCreditoCreateInput = {
    codigo: string
    descripcion: string
    activo?: boolean
    fechaRegistro?: Date | string
    creditos?: CreditoAsociadoCreateNestedManyWithoutTipoCreditoInput
  }

  export type TipoCreditoUncheckedCreateInput = {
    id?: number
    codigo: string
    descripcion: string
    activo?: boolean
    fechaRegistro?: Date | string
    creditos?: CreditoAsociadoUncheckedCreateNestedManyWithoutTipoCreditoInput
  }

  export type TipoCreditoUpdateInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    creditos?: CreditoAsociadoUpdateManyWithoutTipoCreditoNestedInput
  }

  export type TipoCreditoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    creditos?: CreditoAsociadoUncheckedUpdateManyWithoutTipoCreditoNestedInput
  }

  export type TipoCreditoCreateManyInput = {
    codigo: string
    descripcion: string
    activo?: boolean
    fechaRegistro?: Date | string
  }

  export type TipoCreditoUpdateManyMutationInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoCreditoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstadoCreditoCreateInput = {
    codigo: string
    descripcion: string
    activo?: boolean
    fechaRegistro?: Date | string
    creditos?: CreditoAsociadoCreateNestedManyWithoutEstadoInput
    historialOrigen?: HistorialCreditoCreateNestedManyWithoutEstadoAnteriorInput
    historialDestino?: HistorialCreditoCreateNestedManyWithoutEstadoNuevoInput
  }

  export type EstadoCreditoUncheckedCreateInput = {
    id?: number
    codigo: string
    descripcion: string
    activo?: boolean
    fechaRegistro?: Date | string
    creditos?: CreditoAsociadoUncheckedCreateNestedManyWithoutEstadoInput
    historialOrigen?: HistorialCreditoUncheckedCreateNestedManyWithoutEstadoAnteriorInput
    historialDestino?: HistorialCreditoUncheckedCreateNestedManyWithoutEstadoNuevoInput
  }

  export type EstadoCreditoUpdateInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    creditos?: CreditoAsociadoUpdateManyWithoutEstadoNestedInput
    historialOrigen?: HistorialCreditoUpdateManyWithoutEstadoAnteriorNestedInput
    historialDestino?: HistorialCreditoUpdateManyWithoutEstadoNuevoNestedInput
  }

  export type EstadoCreditoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    creditos?: CreditoAsociadoUncheckedUpdateManyWithoutEstadoNestedInput
    historialOrigen?: HistorialCreditoUncheckedUpdateManyWithoutEstadoAnteriorNestedInput
    historialDestino?: HistorialCreditoUncheckedUpdateManyWithoutEstadoNuevoNestedInput
  }

  export type EstadoCreditoCreateManyInput = {
    codigo: string
    descripcion: string
    activo?: boolean
    fechaRegistro?: Date | string
  }

  export type EstadoCreditoUpdateManyMutationInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstadoCreditoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetodoPagoCreateInput = {
    codigo: string
    descripcion: string
    activo?: boolean
    fechaRegistro?: Date | string
    creditos?: CreditoAsociadoCreateNestedManyWithoutFormaPagoInput
  }

  export type MetodoPagoUncheckedCreateInput = {
    id?: number
    codigo: string
    descripcion: string
    activo?: boolean
    fechaRegistro?: Date | string
    creditos?: CreditoAsociadoUncheckedCreateNestedManyWithoutFormaPagoInput
  }

  export type MetodoPagoUpdateInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    creditos?: CreditoAsociadoUpdateManyWithoutFormaPagoNestedInput
  }

  export type MetodoPagoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    creditos?: CreditoAsociadoUncheckedUpdateManyWithoutFormaPagoNestedInput
  }

  export type MetodoPagoCreateManyInput = {
    codigo: string
    descripcion: string
    activo?: boolean
    fechaRegistro?: Date | string
  }

  export type MetodoPagoUpdateManyMutationInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetodoPagoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteCreateInput = {
    documento: string
    nombres: string
    apellidos: string
    activo?: boolean
    fechaRegistro?: Date | string
    TipoDocumento: TipoDocumentoCreateNestedOneWithoutClientesInput
    TipoCliente: TipoClienteCreateNestedOneWithoutClientesInput
    creditos?: CreditoAsociadoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: number
    documento: string
    nombres: string
    apellidos: string
    idTipoDocumento: number
    idTipoCliente: number
    activo?: boolean
    fechaRegistro?: Date | string
    creditos?: CreditoAsociadoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    documento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    TipoDocumento?: TipoDocumentoUpdateOneRequiredWithoutClientesNestedInput
    TipoCliente?: TipoClienteUpdateOneRequiredWithoutClientesNestedInput
    creditos?: CreditoAsociadoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    documento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    idTipoDocumento?: IntFieldUpdateOperationsInput | number
    idTipoCliente?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    creditos?: CreditoAsociadoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    documento: string
    nombres: string
    apellidos: string
    idTipoDocumento: number
    idTipoCliente: number
    activo?: boolean
    fechaRegistro?: Date | string
  }

  export type ClienteUpdateManyMutationInput = {
    documento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    documento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    idTipoDocumento?: IntFieldUpdateOperationsInput | number
    idTipoCliente?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsesorCreateInput = {
    documento: string
    nombre: string
    activo?: boolean
    creditos?: CreditoAsociadoCreateNestedManyWithoutAsesorInput
  }

  export type AsesorUncheckedCreateInput = {
    id?: number
    documento: string
    nombre: string
    activo?: boolean
    creditos?: CreditoAsociadoUncheckedCreateNestedManyWithoutAsesorInput
  }

  export type AsesorUpdateInput = {
    documento?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creditos?: CreditoAsociadoUpdateManyWithoutAsesorNestedInput
  }

  export type AsesorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    documento?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creditos?: CreditoAsociadoUncheckedUpdateManyWithoutAsesorNestedInput
  }

  export type AsesorCreateManyInput = {
    documento: string
    nombre: string
    activo?: boolean
  }

  export type AsesorUpdateManyMutationInput = {
    documento?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AsesorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    documento?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CreditoAsociadoCreateInput = {
    numeroCredito: string
    identificacionAsociado: string
    nombreAsociado: string
    valorSolicitado: Decimal | DecimalJsLike | number | string
    tasaInteres: Decimal | DecimalJsLike | number | string
    numeroCuotas: number
    entidadId?: number
    activo?: boolean
    createdBy: string
    updatedBy?: string | null
    fechaSolicitud?: Date | string
    fechaActualizacion?: Date | string
    Cliente: ClienteCreateNestedOneWithoutCreditosInput
    TipoCredito: TipoCreditoCreateNestedOneWithoutCreditosInput
    FormaPago: MetodoPagoCreateNestedOneWithoutCreditosInput
    Estado: EstadoCreditoCreateNestedOneWithoutCreditosInput
    Asesor?: AsesorCreateNestedOneWithoutCreditosInput
    historial?: HistorialCreditoCreateNestedManyWithoutCreditoInput
    webhookOutbox?: WebhookOutboxCreateNestedManyWithoutCreditoInput
  }

  export type CreditoAsociadoUncheckedCreateInput = {
    id?: number
    numeroCredito: string
    identificacionAsociado: string
    nombreAsociado: string
    idCliente: number
    idTipoCredito: number
    idFormaPago: number
    idEstadoCredito: number
    idAsesor?: number | null
    valorSolicitado: Decimal | DecimalJsLike | number | string
    tasaInteres: Decimal | DecimalJsLike | number | string
    numeroCuotas: number
    entidadId?: number
    activo?: boolean
    createdBy: string | null
    updatedBy?: string | null
    fechaSolicitud?: Date | string
    fechaActualizacion?: Date | string
    historial?: HistorialCreditoUncheckedCreateNestedManyWithoutCreditoInput
    webhookOutbox?: WebhookOutboxUncheckedCreateNestedManyWithoutCreditoInput
  }

  export type CreditoAsociadoUpdateInput = {
    numeroCredito?: StringFieldUpdateOperationsInput | string
    identificacionAsociado?: StringFieldUpdateOperationsInput | string
    nombreAsociado?: StringFieldUpdateOperationsInput | string
    valorSolicitado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tasaInteres?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    numeroCuotas?: IntFieldUpdateOperationsInput | number
    entidadId?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    fechaSolicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    Cliente?: ClienteUpdateOneRequiredWithoutCreditosNestedInput
    TipoCredito?: TipoCreditoUpdateOneRequiredWithoutCreditosNestedInput
    FormaPago?: MetodoPagoUpdateOneRequiredWithoutCreditosNestedInput
    Estado?: EstadoCreditoUpdateOneRequiredWithoutCreditosNestedInput
    Asesor?: AsesorUpdateOneWithoutCreditosNestedInput
    historial?: HistorialCreditoUpdateManyWithoutCreditoNestedInput
    webhookOutbox?: WebhookOutboxUpdateManyWithoutCreditoNestedInput
  }

  export type CreditoAsociadoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroCredito?: StringFieldUpdateOperationsInput | string
    identificacionAsociado?: StringFieldUpdateOperationsInput | string
    nombreAsociado?: StringFieldUpdateOperationsInput | string
    idCliente?: IntFieldUpdateOperationsInput | number
    idTipoCredito?: IntFieldUpdateOperationsInput | number
    idFormaPago?: IntFieldUpdateOperationsInput | number
    idEstadoCredito?: IntFieldUpdateOperationsInput | number
    idAsesor?: NullableIntFieldUpdateOperationsInput | number | null
    valorSolicitado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tasaInteres?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    numeroCuotas?: IntFieldUpdateOperationsInput | number
    entidadId?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    fechaSolicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    historial?: HistorialCreditoUncheckedUpdateManyWithoutCreditoNestedInput
    webhookOutbox?: WebhookOutboxUncheckedUpdateManyWithoutCreditoNestedInput
  }

  export type CreditoAsociadoCreateManyInput = {
    numeroCredito: string
    identificacionAsociado: string
    nombreAsociado: string
    idCliente: number
    idTipoCredito: number
    idFormaPago: number
    idEstadoCredito: number
    idAsesor?: number | null
    valorSolicitado: Decimal | DecimalJsLike | number | string
    tasaInteres: Decimal | DecimalJsLike | number | string
    numeroCuotas: number
    entidadId?: number
    activo?: boolean
    createdBy: string
    updatedBy?: string | null
    fechaSolicitud?: Date | string
    fechaActualizacion?: Date | string
  }

  export type CreditoAsociadoUpdateManyMutationInput = {
    numeroCredito?: StringFieldUpdateOperationsInput | string
    identificacionAsociado?: StringFieldUpdateOperationsInput | string
    nombreAsociado?: StringFieldUpdateOperationsInput | string
    valorSolicitado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tasaInteres?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    numeroCuotas?: IntFieldUpdateOperationsInput | number
    entidadId?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    fechaSolicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditoAsociadoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroCredito?: StringFieldUpdateOperationsInput | string
    identificacionAsociado?: StringFieldUpdateOperationsInput | string
    nombreAsociado?: StringFieldUpdateOperationsInput | string
    idCliente?: IntFieldUpdateOperationsInput | number
    idTipoCredito?: IntFieldUpdateOperationsInput | number
    idFormaPago?: IntFieldUpdateOperationsInput | number
    idEstadoCredito?: IntFieldUpdateOperationsInput | number
    idAsesor?: NullableIntFieldUpdateOperationsInput | number | null
    valorSolicitado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tasaInteres?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    numeroCuotas?: IntFieldUpdateOperationsInput | number
    entidadId?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    fechaSolicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistorialCreditoCreateInput = {
    tipoCambio: string
    estadoAnterior?: string | null
    estadoNuevo: string
    usuario: string
    observacion?: string | null
    camposModificados?: string | null
    fecha?: Date | string
    Credito: CreditoAsociadoCreateNestedOneWithoutHistorialInput
    EstadoAnterior?: EstadoCreditoCreateNestedOneWithoutHistorialOrigenInput
    EstadoNuevo: EstadoCreditoCreateNestedOneWithoutHistorialDestinoInput
  }

  export type HistorialCreditoUncheckedCreateInput = {
    id?: number
    idCredito: number
    tipoCambio: string
    idEstadoAnterior?: number | null
    idEstadoNuevo: number
    estadoAnterior?: string | null
    estadoNuevo: string
    usuario: string
    observacion?: string | null
    camposModificados?: string | null
    fecha?: Date | string
  }

  export type HistorialCreditoUpdateInput = {
    tipoCambio?: StringFieldUpdateOperationsInput | string
    estadoAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    estadoNuevo?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    camposModificados?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Credito?: CreditoAsociadoUpdateOneRequiredWithoutHistorialNestedInput
    EstadoAnterior?: EstadoCreditoUpdateOneWithoutHistorialOrigenNestedInput
    EstadoNuevo?: EstadoCreditoUpdateOneRequiredWithoutHistorialDestinoNestedInput
  }

  export type HistorialCreditoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCredito?: IntFieldUpdateOperationsInput | number
    tipoCambio?: StringFieldUpdateOperationsInput | string
    idEstadoAnterior?: NullableIntFieldUpdateOperationsInput | number | null
    idEstadoNuevo?: IntFieldUpdateOperationsInput | number
    estadoAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    estadoNuevo?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    camposModificados?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistorialCreditoCreateManyInput = {
    idCredito: number
    tipoCambio: string
    idEstadoAnterior?: number | null
    idEstadoNuevo: number
    estadoAnterior?: string | null
    estadoNuevo: string
    usuario: string
    observacion?: string | null
    camposModificados?: string | null
    fecha?: Date | string
  }

  export type HistorialCreditoUpdateManyMutationInput = {
    tipoCambio?: StringFieldUpdateOperationsInput | string
    estadoAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    estadoNuevo?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    camposModificados?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistorialCreditoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCredito?: IntFieldUpdateOperationsInput | number
    tipoCambio?: StringFieldUpdateOperationsInput | string
    idEstadoAnterior?: NullableIntFieldUpdateOperationsInput | number | null
    idEstadoNuevo?: IntFieldUpdateOperationsInput | number
    estadoAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    estadoNuevo?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    camposModificados?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookOutboxCreateInput = {
    eventId: string
    eventType: string
    entidadId?: number
    payload: string
    estado?: string
    intentos?: number
    ultimoError?: string | null
    proximoIntento?: Date | string
    fechaCreacion?: Date | string
    fechaEnvio?: Date | string | null
    Credito: CreditoAsociadoCreateNestedOneWithoutWebhookOutboxInput
  }

  export type WebhookOutboxUncheckedCreateInput = {
    id?: number
    eventId: string
    eventType: string
    idCredito: number
    entidadId?: number
    payload: string
    estado?: string
    intentos?: number
    ultimoError?: string | null
    proximoIntento?: Date | string
    fechaCreacion?: Date | string
    fechaEnvio?: Date | string | null
  }

  export type WebhookOutboxUpdateInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    entidadId?: IntFieldUpdateOperationsInput | number
    payload?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    intentos?: IntFieldUpdateOperationsInput | number
    ultimoError?: NullableStringFieldUpdateOperationsInput | string | null
    proximoIntento?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaEnvio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Credito?: CreditoAsociadoUpdateOneRequiredWithoutWebhookOutboxNestedInput
  }

  export type WebhookOutboxUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    idCredito?: IntFieldUpdateOperationsInput | number
    entidadId?: IntFieldUpdateOperationsInput | number
    payload?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    intentos?: IntFieldUpdateOperationsInput | number
    ultimoError?: NullableStringFieldUpdateOperationsInput | string | null
    proximoIntento?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaEnvio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WebhookOutboxCreateManyInput = {
    eventId: string
    eventType: string
    idCredito: number
    entidadId?: number
    payload: string
    estado?: string
    intentos?: number
    ultimoError?: string | null
    proximoIntento?: Date | string
    fechaCreacion?: Date | string
    fechaEnvio?: Date | string | null
  }

  export type WebhookOutboxUpdateManyMutationInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    entidadId?: IntFieldUpdateOperationsInput | number
    payload?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    intentos?: IntFieldUpdateOperationsInput | number
    ultimoError?: NullableStringFieldUpdateOperationsInput | string | null
    proximoIntento?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaEnvio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WebhookOutboxUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    idCredito?: IntFieldUpdateOperationsInput | number
    entidadId?: IntFieldUpdateOperationsInput | number
    payload?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    intentos?: IntFieldUpdateOperationsInput | number
    ultimoError?: NullableStringFieldUpdateOperationsInput | string | null
    proximoIntento?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaEnvio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ClienteListRelationFilter = {
    every?: ClienteWhereInput
    some?: ClienteWhereInput
    none?: ClienteWhereInput
  }

  export type ClienteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TipoClienteCountOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    fechaRegistro?: SortOrder
  }

  export type TipoClienteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TipoClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    fechaRegistro?: SortOrder
  }

  export type TipoClienteMinOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    fechaRegistro?: SortOrder
  }

  export type TipoClienteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TipoDocumentoCountOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    fechaRegistro?: SortOrder
  }

  export type TipoDocumentoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TipoDocumentoMaxOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    fechaRegistro?: SortOrder
  }

  export type TipoDocumentoMinOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    fechaRegistro?: SortOrder
  }

  export type TipoDocumentoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CreditoAsociadoListRelationFilter = {
    every?: CreditoAsociadoWhereInput
    some?: CreditoAsociadoWhereInput
    none?: CreditoAsociadoWhereInput
  }

  export type CreditoAsociadoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TipoCreditoCountOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    fechaRegistro?: SortOrder
  }

  export type TipoCreditoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TipoCreditoMaxOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    fechaRegistro?: SortOrder
  }

  export type TipoCreditoMinOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    fechaRegistro?: SortOrder
  }

  export type TipoCreditoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HistorialCreditoListRelationFilter = {
    every?: HistorialCreditoWhereInput
    some?: HistorialCreditoWhereInput
    none?: HistorialCreditoWhereInput
  }

  export type HistorialCreditoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EstadoCreditoCountOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    fechaRegistro?: SortOrder
  }

  export type EstadoCreditoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EstadoCreditoMaxOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    fechaRegistro?: SortOrder
  }

  export type EstadoCreditoMinOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    fechaRegistro?: SortOrder
  }

  export type EstadoCreditoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MetodoPagoCountOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    fechaRegistro?: SortOrder
  }

  export type MetodoPagoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MetodoPagoMaxOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    fechaRegistro?: SortOrder
  }

  export type MetodoPagoMinOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    activo?: SortOrder
    fechaRegistro?: SortOrder
  }

  export type MetodoPagoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TipoDocumentoScalarRelationFilter = {
    is?: TipoDocumentoWhereInput
    isNot?: TipoDocumentoWhereInput
  }

  export type TipoClienteScalarRelationFilter = {
    is?: TipoClienteWhereInput
    isNot?: TipoClienteWhereInput
  }

  export type ClienteIdTipoDocumentoDocumentoCompoundUniqueInput = {
    idTipoDocumento: number
    documento: string
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    documento?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    idTipoDocumento?: SortOrder
    idTipoCliente?: SortOrder
    activo?: SortOrder
    fechaRegistro?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    id?: SortOrder
    idTipoDocumento?: SortOrder
    idTipoCliente?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    documento?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    idTipoDocumento?: SortOrder
    idTipoCliente?: SortOrder
    activo?: SortOrder
    fechaRegistro?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    documento?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    idTipoDocumento?: SortOrder
    idTipoCliente?: SortOrder
    activo?: SortOrder
    fechaRegistro?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    id?: SortOrder
    idTipoDocumento?: SortOrder
    idTipoCliente?: SortOrder
  }

  export type AsesorCountOrderByAggregateInput = {
    id?: SortOrder
    documento?: SortOrder
    nombre?: SortOrder
    activo?: SortOrder
  }

  export type AsesorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AsesorMaxOrderByAggregateInput = {
    id?: SortOrder
    documento?: SortOrder
    nombre?: SortOrder
    activo?: SortOrder
  }

  export type AsesorMinOrderByAggregateInput = {
    id?: SortOrder
    documento?: SortOrder
    nombre?: SortOrder
    activo?: SortOrder
  }

  export type AsesorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type TipoCreditoScalarRelationFilter = {
    is?: TipoCreditoWhereInput
    isNot?: TipoCreditoWhereInput
  }

  export type MetodoPagoScalarRelationFilter = {
    is?: MetodoPagoWhereInput
    isNot?: MetodoPagoWhereInput
  }

  export type EstadoCreditoScalarRelationFilter = {
    is?: EstadoCreditoWhereInput
    isNot?: EstadoCreditoWhereInput
  }

  export type AsesorNullableScalarRelationFilter = {
    is?: AsesorWhereInput | null
    isNot?: AsesorWhereInput | null
  }

  export type WebhookOutboxListRelationFilter = {
    every?: WebhookOutboxWhereInput
    some?: WebhookOutboxWhereInput
    none?: WebhookOutboxWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WebhookOutboxOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CreditoAsociadoCountOrderByAggregateInput = {
    id?: SortOrder
    numeroCredito?: SortOrder
    identificacionAsociado?: SortOrder
    nombreAsociado?: SortOrder
    idCliente?: SortOrder
    idTipoCredito?: SortOrder
    idFormaPago?: SortOrder
    idEstadoCredito?: SortOrder
    idAsesor?: SortOrder
    valorSolicitado?: SortOrder
    tasaInteres?: SortOrder
    numeroCuotas?: SortOrder
    entidadId?: SortOrder
    activo?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    fechaSolicitud?: SortOrder
    fechaActualizacion?: SortOrder
  }

  export type CreditoAsociadoAvgOrderByAggregateInput = {
    id?: SortOrder
    idCliente?: SortOrder
    idTipoCredito?: SortOrder
    idFormaPago?: SortOrder
    idEstadoCredito?: SortOrder
    idAsesor?: SortOrder
    valorSolicitado?: SortOrder
    tasaInteres?: SortOrder
    numeroCuotas?: SortOrder
    entidadId?: SortOrder
  }

  export type CreditoAsociadoMaxOrderByAggregateInput = {
    id?: SortOrder
    numeroCredito?: SortOrder
    identificacionAsociado?: SortOrder
    nombreAsociado?: SortOrder
    idCliente?: SortOrder
    idTipoCredito?: SortOrder
    idFormaPago?: SortOrder
    idEstadoCredito?: SortOrder
    idAsesor?: SortOrder
    valorSolicitado?: SortOrder
    tasaInteres?: SortOrder
    numeroCuotas?: SortOrder
    entidadId?: SortOrder
    activo?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    fechaSolicitud?: SortOrder
    fechaActualizacion?: SortOrder
  }

  export type CreditoAsociadoMinOrderByAggregateInput = {
    id?: SortOrder
    numeroCredito?: SortOrder
    identificacionAsociado?: SortOrder
    nombreAsociado?: SortOrder
    idCliente?: SortOrder
    idTipoCredito?: SortOrder
    idFormaPago?: SortOrder
    idEstadoCredito?: SortOrder
    idAsesor?: SortOrder
    valorSolicitado?: SortOrder
    tasaInteres?: SortOrder
    numeroCuotas?: SortOrder
    entidadId?: SortOrder
    activo?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    fechaSolicitud?: SortOrder
    fechaActualizacion?: SortOrder
  }

  export type CreditoAsociadoSumOrderByAggregateInput = {
    id?: SortOrder
    idCliente?: SortOrder
    idTipoCredito?: SortOrder
    idFormaPago?: SortOrder
    idEstadoCredito?: SortOrder
    idAsesor?: SortOrder
    valorSolicitado?: SortOrder
    tasaInteres?: SortOrder
    numeroCuotas?: SortOrder
    entidadId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CreditoAsociadoScalarRelationFilter = {
    is?: CreditoAsociadoWhereInput
    isNot?: CreditoAsociadoWhereInput
  }

  export type EstadoCreditoNullableScalarRelationFilter = {
    is?: EstadoCreditoWhereInput | null
    isNot?: EstadoCreditoWhereInput | null
  }

  export type HistorialCreditoCountOrderByAggregateInput = {
    id?: SortOrder
    idCredito?: SortOrder
    tipoCambio?: SortOrder
    idEstadoAnterior?: SortOrder
    idEstadoNuevo?: SortOrder
    estadoAnterior?: SortOrder
    estadoNuevo?: SortOrder
    usuario?: SortOrder
    observacion?: SortOrder
    camposModificados?: SortOrder
    fecha?: SortOrder
  }

  export type HistorialCreditoAvgOrderByAggregateInput = {
    id?: SortOrder
    idCredito?: SortOrder
    idEstadoAnterior?: SortOrder
    idEstadoNuevo?: SortOrder
  }

  export type HistorialCreditoMaxOrderByAggregateInput = {
    id?: SortOrder
    idCredito?: SortOrder
    tipoCambio?: SortOrder
    idEstadoAnterior?: SortOrder
    idEstadoNuevo?: SortOrder
    estadoAnterior?: SortOrder
    estadoNuevo?: SortOrder
    usuario?: SortOrder
    observacion?: SortOrder
    camposModificados?: SortOrder
    fecha?: SortOrder
  }

  export type HistorialCreditoMinOrderByAggregateInput = {
    id?: SortOrder
    idCredito?: SortOrder
    tipoCambio?: SortOrder
    idEstadoAnterior?: SortOrder
    idEstadoNuevo?: SortOrder
    estadoAnterior?: SortOrder
    estadoNuevo?: SortOrder
    usuario?: SortOrder
    observacion?: SortOrder
    camposModificados?: SortOrder
    fecha?: SortOrder
  }

  export type HistorialCreditoSumOrderByAggregateInput = {
    id?: SortOrder
    idCredito?: SortOrder
    idEstadoAnterior?: SortOrder
    idEstadoNuevo?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type WebhookOutboxCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    eventType?: SortOrder
    idCredito?: SortOrder
    entidadId?: SortOrder
    payload?: SortOrder
    estado?: SortOrder
    intentos?: SortOrder
    ultimoError?: SortOrder
    proximoIntento?: SortOrder
    fechaCreacion?: SortOrder
    fechaEnvio?: SortOrder
  }

  export type WebhookOutboxAvgOrderByAggregateInput = {
    id?: SortOrder
    idCredito?: SortOrder
    entidadId?: SortOrder
    intentos?: SortOrder
  }

  export type WebhookOutboxMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    eventType?: SortOrder
    idCredito?: SortOrder
    entidadId?: SortOrder
    payload?: SortOrder
    estado?: SortOrder
    intentos?: SortOrder
    ultimoError?: SortOrder
    proximoIntento?: SortOrder
    fechaCreacion?: SortOrder
    fechaEnvio?: SortOrder
  }

  export type WebhookOutboxMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    eventType?: SortOrder
    idCredito?: SortOrder
    entidadId?: SortOrder
    payload?: SortOrder
    estado?: SortOrder
    intentos?: SortOrder
    ultimoError?: SortOrder
    proximoIntento?: SortOrder
    fechaCreacion?: SortOrder
    fechaEnvio?: SortOrder
  }

  export type WebhookOutboxSumOrderByAggregateInput = {
    id?: SortOrder
    idCredito?: SortOrder
    entidadId?: SortOrder
    intentos?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ClienteCreateNestedManyWithoutTipoClienteInput = {
    create?: XOR<ClienteCreateWithoutTipoClienteInput, ClienteUncheckedCreateWithoutTipoClienteInput> | ClienteCreateWithoutTipoClienteInput[] | ClienteUncheckedCreateWithoutTipoClienteInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutTipoClienteInput | ClienteCreateOrConnectWithoutTipoClienteInput[]
    createMany?: ClienteCreateManyTipoClienteInputEnvelope
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
  }

  export type ClienteUncheckedCreateNestedManyWithoutTipoClienteInput = {
    create?: XOR<ClienteCreateWithoutTipoClienteInput, ClienteUncheckedCreateWithoutTipoClienteInput> | ClienteCreateWithoutTipoClienteInput[] | ClienteUncheckedCreateWithoutTipoClienteInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutTipoClienteInput | ClienteCreateOrConnectWithoutTipoClienteInput[]
    createMany?: ClienteCreateManyTipoClienteInputEnvelope
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClienteUpdateManyWithoutTipoClienteNestedInput = {
    create?: XOR<ClienteCreateWithoutTipoClienteInput, ClienteUncheckedCreateWithoutTipoClienteInput> | ClienteCreateWithoutTipoClienteInput[] | ClienteUncheckedCreateWithoutTipoClienteInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutTipoClienteInput | ClienteCreateOrConnectWithoutTipoClienteInput[]
    upsert?: ClienteUpsertWithWhereUniqueWithoutTipoClienteInput | ClienteUpsertWithWhereUniqueWithoutTipoClienteInput[]
    createMany?: ClienteCreateManyTipoClienteInputEnvelope
    set?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    disconnect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    delete?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    update?: ClienteUpdateWithWhereUniqueWithoutTipoClienteInput | ClienteUpdateWithWhereUniqueWithoutTipoClienteInput[]
    updateMany?: ClienteUpdateManyWithWhereWithoutTipoClienteInput | ClienteUpdateManyWithWhereWithoutTipoClienteInput[]
    deleteMany?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClienteUncheckedUpdateManyWithoutTipoClienteNestedInput = {
    create?: XOR<ClienteCreateWithoutTipoClienteInput, ClienteUncheckedCreateWithoutTipoClienteInput> | ClienteCreateWithoutTipoClienteInput[] | ClienteUncheckedCreateWithoutTipoClienteInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutTipoClienteInput | ClienteCreateOrConnectWithoutTipoClienteInput[]
    upsert?: ClienteUpsertWithWhereUniqueWithoutTipoClienteInput | ClienteUpsertWithWhereUniqueWithoutTipoClienteInput[]
    createMany?: ClienteCreateManyTipoClienteInputEnvelope
    set?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    disconnect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    delete?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    update?: ClienteUpdateWithWhereUniqueWithoutTipoClienteInput | ClienteUpdateWithWhereUniqueWithoutTipoClienteInput[]
    updateMany?: ClienteUpdateManyWithWhereWithoutTipoClienteInput | ClienteUpdateManyWithWhereWithoutTipoClienteInput[]
    deleteMany?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
  }

  export type ClienteCreateNestedManyWithoutTipoDocumentoInput = {
    create?: XOR<ClienteCreateWithoutTipoDocumentoInput, ClienteUncheckedCreateWithoutTipoDocumentoInput> | ClienteCreateWithoutTipoDocumentoInput[] | ClienteUncheckedCreateWithoutTipoDocumentoInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutTipoDocumentoInput | ClienteCreateOrConnectWithoutTipoDocumentoInput[]
    createMany?: ClienteCreateManyTipoDocumentoInputEnvelope
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
  }

  export type ClienteUncheckedCreateNestedManyWithoutTipoDocumentoInput = {
    create?: XOR<ClienteCreateWithoutTipoDocumentoInput, ClienteUncheckedCreateWithoutTipoDocumentoInput> | ClienteCreateWithoutTipoDocumentoInput[] | ClienteUncheckedCreateWithoutTipoDocumentoInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutTipoDocumentoInput | ClienteCreateOrConnectWithoutTipoDocumentoInput[]
    createMany?: ClienteCreateManyTipoDocumentoInputEnvelope
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
  }

  export type ClienteUpdateManyWithoutTipoDocumentoNestedInput = {
    create?: XOR<ClienteCreateWithoutTipoDocumentoInput, ClienteUncheckedCreateWithoutTipoDocumentoInput> | ClienteCreateWithoutTipoDocumentoInput[] | ClienteUncheckedCreateWithoutTipoDocumentoInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutTipoDocumentoInput | ClienteCreateOrConnectWithoutTipoDocumentoInput[]
    upsert?: ClienteUpsertWithWhereUniqueWithoutTipoDocumentoInput | ClienteUpsertWithWhereUniqueWithoutTipoDocumentoInput[]
    createMany?: ClienteCreateManyTipoDocumentoInputEnvelope
    set?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    disconnect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    delete?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    update?: ClienteUpdateWithWhereUniqueWithoutTipoDocumentoInput | ClienteUpdateWithWhereUniqueWithoutTipoDocumentoInput[]
    updateMany?: ClienteUpdateManyWithWhereWithoutTipoDocumentoInput | ClienteUpdateManyWithWhereWithoutTipoDocumentoInput[]
    deleteMany?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
  }

  export type ClienteUncheckedUpdateManyWithoutTipoDocumentoNestedInput = {
    create?: XOR<ClienteCreateWithoutTipoDocumentoInput, ClienteUncheckedCreateWithoutTipoDocumentoInput> | ClienteCreateWithoutTipoDocumentoInput[] | ClienteUncheckedCreateWithoutTipoDocumentoInput[]
    connectOrCreate?: ClienteCreateOrConnectWithoutTipoDocumentoInput | ClienteCreateOrConnectWithoutTipoDocumentoInput[]
    upsert?: ClienteUpsertWithWhereUniqueWithoutTipoDocumentoInput | ClienteUpsertWithWhereUniqueWithoutTipoDocumentoInput[]
    createMany?: ClienteCreateManyTipoDocumentoInputEnvelope
    set?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    disconnect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    delete?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    connect?: ClienteWhereUniqueInput | ClienteWhereUniqueInput[]
    update?: ClienteUpdateWithWhereUniqueWithoutTipoDocumentoInput | ClienteUpdateWithWhereUniqueWithoutTipoDocumentoInput[]
    updateMany?: ClienteUpdateManyWithWhereWithoutTipoDocumentoInput | ClienteUpdateManyWithWhereWithoutTipoDocumentoInput[]
    deleteMany?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
  }

  export type CreditoAsociadoCreateNestedManyWithoutTipoCreditoInput = {
    create?: XOR<CreditoAsociadoCreateWithoutTipoCreditoInput, CreditoAsociadoUncheckedCreateWithoutTipoCreditoInput> | CreditoAsociadoCreateWithoutTipoCreditoInput[] | CreditoAsociadoUncheckedCreateWithoutTipoCreditoInput[]
    connectOrCreate?: CreditoAsociadoCreateOrConnectWithoutTipoCreditoInput | CreditoAsociadoCreateOrConnectWithoutTipoCreditoInput[]
    createMany?: CreditoAsociadoCreateManyTipoCreditoInputEnvelope
    connect?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
  }

  export type CreditoAsociadoUncheckedCreateNestedManyWithoutTipoCreditoInput = {
    create?: XOR<CreditoAsociadoCreateWithoutTipoCreditoInput, CreditoAsociadoUncheckedCreateWithoutTipoCreditoInput> | CreditoAsociadoCreateWithoutTipoCreditoInput[] | CreditoAsociadoUncheckedCreateWithoutTipoCreditoInput[]
    connectOrCreate?: CreditoAsociadoCreateOrConnectWithoutTipoCreditoInput | CreditoAsociadoCreateOrConnectWithoutTipoCreditoInput[]
    createMany?: CreditoAsociadoCreateManyTipoCreditoInputEnvelope
    connect?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
  }

  export type CreditoAsociadoUpdateManyWithoutTipoCreditoNestedInput = {
    create?: XOR<CreditoAsociadoCreateWithoutTipoCreditoInput, CreditoAsociadoUncheckedCreateWithoutTipoCreditoInput> | CreditoAsociadoCreateWithoutTipoCreditoInput[] | CreditoAsociadoUncheckedCreateWithoutTipoCreditoInput[]
    connectOrCreate?: CreditoAsociadoCreateOrConnectWithoutTipoCreditoInput | CreditoAsociadoCreateOrConnectWithoutTipoCreditoInput[]
    upsert?: CreditoAsociadoUpsertWithWhereUniqueWithoutTipoCreditoInput | CreditoAsociadoUpsertWithWhereUniqueWithoutTipoCreditoInput[]
    createMany?: CreditoAsociadoCreateManyTipoCreditoInputEnvelope
    set?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
    disconnect?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
    delete?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
    connect?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
    update?: CreditoAsociadoUpdateWithWhereUniqueWithoutTipoCreditoInput | CreditoAsociadoUpdateWithWhereUniqueWithoutTipoCreditoInput[]
    updateMany?: CreditoAsociadoUpdateManyWithWhereWithoutTipoCreditoInput | CreditoAsociadoUpdateManyWithWhereWithoutTipoCreditoInput[]
    deleteMany?: CreditoAsociadoScalarWhereInput | CreditoAsociadoScalarWhereInput[]
  }

  export type CreditoAsociadoUncheckedUpdateManyWithoutTipoCreditoNestedInput = {
    create?: XOR<CreditoAsociadoCreateWithoutTipoCreditoInput, CreditoAsociadoUncheckedCreateWithoutTipoCreditoInput> | CreditoAsociadoCreateWithoutTipoCreditoInput[] | CreditoAsociadoUncheckedCreateWithoutTipoCreditoInput[]
    connectOrCreate?: CreditoAsociadoCreateOrConnectWithoutTipoCreditoInput | CreditoAsociadoCreateOrConnectWithoutTipoCreditoInput[]
    upsert?: CreditoAsociadoUpsertWithWhereUniqueWithoutTipoCreditoInput | CreditoAsociadoUpsertWithWhereUniqueWithoutTipoCreditoInput[]
    createMany?: CreditoAsociadoCreateManyTipoCreditoInputEnvelope
    set?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
    disconnect?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
    delete?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
    connect?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
    update?: CreditoAsociadoUpdateWithWhereUniqueWithoutTipoCreditoInput | CreditoAsociadoUpdateWithWhereUniqueWithoutTipoCreditoInput[]
    updateMany?: CreditoAsociadoUpdateManyWithWhereWithoutTipoCreditoInput | CreditoAsociadoUpdateManyWithWhereWithoutTipoCreditoInput[]
    deleteMany?: CreditoAsociadoScalarWhereInput | CreditoAsociadoScalarWhereInput[]
  }

  export type CreditoAsociadoCreateNestedManyWithoutEstadoInput = {
    create?: XOR<CreditoAsociadoCreateWithoutEstadoInput, CreditoAsociadoUncheckedCreateWithoutEstadoInput> | CreditoAsociadoCreateWithoutEstadoInput[] | CreditoAsociadoUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: CreditoAsociadoCreateOrConnectWithoutEstadoInput | CreditoAsociadoCreateOrConnectWithoutEstadoInput[]
    createMany?: CreditoAsociadoCreateManyEstadoInputEnvelope
    connect?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
  }

  export type HistorialCreditoCreateNestedManyWithoutEstadoAnteriorInput = {
    create?: XOR<HistorialCreditoCreateWithoutEstadoAnteriorInput, HistorialCreditoUncheckedCreateWithoutEstadoAnteriorInput> | HistorialCreditoCreateWithoutEstadoAnteriorInput[] | HistorialCreditoUncheckedCreateWithoutEstadoAnteriorInput[]
    connectOrCreate?: HistorialCreditoCreateOrConnectWithoutEstadoAnteriorInput | HistorialCreditoCreateOrConnectWithoutEstadoAnteriorInput[]
    createMany?: HistorialCreditoCreateManyEstadoAnteriorInputEnvelope
    connect?: HistorialCreditoWhereUniqueInput | HistorialCreditoWhereUniqueInput[]
  }

  export type HistorialCreditoCreateNestedManyWithoutEstadoNuevoInput = {
    create?: XOR<HistorialCreditoCreateWithoutEstadoNuevoInput, HistorialCreditoUncheckedCreateWithoutEstadoNuevoInput> | HistorialCreditoCreateWithoutEstadoNuevoInput[] | HistorialCreditoUncheckedCreateWithoutEstadoNuevoInput[]
    connectOrCreate?: HistorialCreditoCreateOrConnectWithoutEstadoNuevoInput | HistorialCreditoCreateOrConnectWithoutEstadoNuevoInput[]
    createMany?: HistorialCreditoCreateManyEstadoNuevoInputEnvelope
    connect?: HistorialCreditoWhereUniqueInput | HistorialCreditoWhereUniqueInput[]
  }

  export type CreditoAsociadoUncheckedCreateNestedManyWithoutEstadoInput = {
    create?: XOR<CreditoAsociadoCreateWithoutEstadoInput, CreditoAsociadoUncheckedCreateWithoutEstadoInput> | CreditoAsociadoCreateWithoutEstadoInput[] | CreditoAsociadoUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: CreditoAsociadoCreateOrConnectWithoutEstadoInput | CreditoAsociadoCreateOrConnectWithoutEstadoInput[]
    createMany?: CreditoAsociadoCreateManyEstadoInputEnvelope
    connect?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
  }

  export type HistorialCreditoUncheckedCreateNestedManyWithoutEstadoAnteriorInput = {
    create?: XOR<HistorialCreditoCreateWithoutEstadoAnteriorInput, HistorialCreditoUncheckedCreateWithoutEstadoAnteriorInput> | HistorialCreditoCreateWithoutEstadoAnteriorInput[] | HistorialCreditoUncheckedCreateWithoutEstadoAnteriorInput[]
    connectOrCreate?: HistorialCreditoCreateOrConnectWithoutEstadoAnteriorInput | HistorialCreditoCreateOrConnectWithoutEstadoAnteriorInput[]
    createMany?: HistorialCreditoCreateManyEstadoAnteriorInputEnvelope
    connect?: HistorialCreditoWhereUniqueInput | HistorialCreditoWhereUniqueInput[]
  }

  export type HistorialCreditoUncheckedCreateNestedManyWithoutEstadoNuevoInput = {
    create?: XOR<HistorialCreditoCreateWithoutEstadoNuevoInput, HistorialCreditoUncheckedCreateWithoutEstadoNuevoInput> | HistorialCreditoCreateWithoutEstadoNuevoInput[] | HistorialCreditoUncheckedCreateWithoutEstadoNuevoInput[]
    connectOrCreate?: HistorialCreditoCreateOrConnectWithoutEstadoNuevoInput | HistorialCreditoCreateOrConnectWithoutEstadoNuevoInput[]
    createMany?: HistorialCreditoCreateManyEstadoNuevoInputEnvelope
    connect?: HistorialCreditoWhereUniqueInput | HistorialCreditoWhereUniqueInput[]
  }

  export type CreditoAsociadoUpdateManyWithoutEstadoNestedInput = {
    create?: XOR<CreditoAsociadoCreateWithoutEstadoInput, CreditoAsociadoUncheckedCreateWithoutEstadoInput> | CreditoAsociadoCreateWithoutEstadoInput[] | CreditoAsociadoUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: CreditoAsociadoCreateOrConnectWithoutEstadoInput | CreditoAsociadoCreateOrConnectWithoutEstadoInput[]
    upsert?: CreditoAsociadoUpsertWithWhereUniqueWithoutEstadoInput | CreditoAsociadoUpsertWithWhereUniqueWithoutEstadoInput[]
    createMany?: CreditoAsociadoCreateManyEstadoInputEnvelope
    set?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
    disconnect?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
    delete?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
    connect?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
    update?: CreditoAsociadoUpdateWithWhereUniqueWithoutEstadoInput | CreditoAsociadoUpdateWithWhereUniqueWithoutEstadoInput[]
    updateMany?: CreditoAsociadoUpdateManyWithWhereWithoutEstadoInput | CreditoAsociadoUpdateManyWithWhereWithoutEstadoInput[]
    deleteMany?: CreditoAsociadoScalarWhereInput | CreditoAsociadoScalarWhereInput[]
  }

  export type HistorialCreditoUpdateManyWithoutEstadoAnteriorNestedInput = {
    create?: XOR<HistorialCreditoCreateWithoutEstadoAnteriorInput, HistorialCreditoUncheckedCreateWithoutEstadoAnteriorInput> | HistorialCreditoCreateWithoutEstadoAnteriorInput[] | HistorialCreditoUncheckedCreateWithoutEstadoAnteriorInput[]
    connectOrCreate?: HistorialCreditoCreateOrConnectWithoutEstadoAnteriorInput | HistorialCreditoCreateOrConnectWithoutEstadoAnteriorInput[]
    upsert?: HistorialCreditoUpsertWithWhereUniqueWithoutEstadoAnteriorInput | HistorialCreditoUpsertWithWhereUniqueWithoutEstadoAnteriorInput[]
    createMany?: HistorialCreditoCreateManyEstadoAnteriorInputEnvelope
    set?: HistorialCreditoWhereUniqueInput | HistorialCreditoWhereUniqueInput[]
    disconnect?: HistorialCreditoWhereUniqueInput | HistorialCreditoWhereUniqueInput[]
    delete?: HistorialCreditoWhereUniqueInput | HistorialCreditoWhereUniqueInput[]
    connect?: HistorialCreditoWhereUniqueInput | HistorialCreditoWhereUniqueInput[]
    update?: HistorialCreditoUpdateWithWhereUniqueWithoutEstadoAnteriorInput | HistorialCreditoUpdateWithWhereUniqueWithoutEstadoAnteriorInput[]
    updateMany?: HistorialCreditoUpdateManyWithWhereWithoutEstadoAnteriorInput | HistorialCreditoUpdateManyWithWhereWithoutEstadoAnteriorInput[]
    deleteMany?: HistorialCreditoScalarWhereInput | HistorialCreditoScalarWhereInput[]
  }

  export type HistorialCreditoUpdateManyWithoutEstadoNuevoNestedInput = {
    create?: XOR<HistorialCreditoCreateWithoutEstadoNuevoInput, HistorialCreditoUncheckedCreateWithoutEstadoNuevoInput> | HistorialCreditoCreateWithoutEstadoNuevoInput[] | HistorialCreditoUncheckedCreateWithoutEstadoNuevoInput[]
    connectOrCreate?: HistorialCreditoCreateOrConnectWithoutEstadoNuevoInput | HistorialCreditoCreateOrConnectWithoutEstadoNuevoInput[]
    upsert?: HistorialCreditoUpsertWithWhereUniqueWithoutEstadoNuevoInput | HistorialCreditoUpsertWithWhereUniqueWithoutEstadoNuevoInput[]
    createMany?: HistorialCreditoCreateManyEstadoNuevoInputEnvelope
    set?: HistorialCreditoWhereUniqueInput | HistorialCreditoWhereUniqueInput[]
    disconnect?: HistorialCreditoWhereUniqueInput | HistorialCreditoWhereUniqueInput[]
    delete?: HistorialCreditoWhereUniqueInput | HistorialCreditoWhereUniqueInput[]
    connect?: HistorialCreditoWhereUniqueInput | HistorialCreditoWhereUniqueInput[]
    update?: HistorialCreditoUpdateWithWhereUniqueWithoutEstadoNuevoInput | HistorialCreditoUpdateWithWhereUniqueWithoutEstadoNuevoInput[]
    updateMany?: HistorialCreditoUpdateManyWithWhereWithoutEstadoNuevoInput | HistorialCreditoUpdateManyWithWhereWithoutEstadoNuevoInput[]
    deleteMany?: HistorialCreditoScalarWhereInput | HistorialCreditoScalarWhereInput[]
  }

  export type CreditoAsociadoUncheckedUpdateManyWithoutEstadoNestedInput = {
    create?: XOR<CreditoAsociadoCreateWithoutEstadoInput, CreditoAsociadoUncheckedCreateWithoutEstadoInput> | CreditoAsociadoCreateWithoutEstadoInput[] | CreditoAsociadoUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: CreditoAsociadoCreateOrConnectWithoutEstadoInput | CreditoAsociadoCreateOrConnectWithoutEstadoInput[]
    upsert?: CreditoAsociadoUpsertWithWhereUniqueWithoutEstadoInput | CreditoAsociadoUpsertWithWhereUniqueWithoutEstadoInput[]
    createMany?: CreditoAsociadoCreateManyEstadoInputEnvelope
    set?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
    disconnect?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
    delete?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
    connect?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
    update?: CreditoAsociadoUpdateWithWhereUniqueWithoutEstadoInput | CreditoAsociadoUpdateWithWhereUniqueWithoutEstadoInput[]
    updateMany?: CreditoAsociadoUpdateManyWithWhereWithoutEstadoInput | CreditoAsociadoUpdateManyWithWhereWithoutEstadoInput[]
    deleteMany?: CreditoAsociadoScalarWhereInput | CreditoAsociadoScalarWhereInput[]
  }

  export type HistorialCreditoUncheckedUpdateManyWithoutEstadoAnteriorNestedInput = {
    create?: XOR<HistorialCreditoCreateWithoutEstadoAnteriorInput, HistorialCreditoUncheckedCreateWithoutEstadoAnteriorInput> | HistorialCreditoCreateWithoutEstadoAnteriorInput[] | HistorialCreditoUncheckedCreateWithoutEstadoAnteriorInput[]
    connectOrCreate?: HistorialCreditoCreateOrConnectWithoutEstadoAnteriorInput | HistorialCreditoCreateOrConnectWithoutEstadoAnteriorInput[]
    upsert?: HistorialCreditoUpsertWithWhereUniqueWithoutEstadoAnteriorInput | HistorialCreditoUpsertWithWhereUniqueWithoutEstadoAnteriorInput[]
    createMany?: HistorialCreditoCreateManyEstadoAnteriorInputEnvelope
    set?: HistorialCreditoWhereUniqueInput | HistorialCreditoWhereUniqueInput[]
    disconnect?: HistorialCreditoWhereUniqueInput | HistorialCreditoWhereUniqueInput[]
    delete?: HistorialCreditoWhereUniqueInput | HistorialCreditoWhereUniqueInput[]
    connect?: HistorialCreditoWhereUniqueInput | HistorialCreditoWhereUniqueInput[]
    update?: HistorialCreditoUpdateWithWhereUniqueWithoutEstadoAnteriorInput | HistorialCreditoUpdateWithWhereUniqueWithoutEstadoAnteriorInput[]
    updateMany?: HistorialCreditoUpdateManyWithWhereWithoutEstadoAnteriorInput | HistorialCreditoUpdateManyWithWhereWithoutEstadoAnteriorInput[]
    deleteMany?: HistorialCreditoScalarWhereInput | HistorialCreditoScalarWhereInput[]
  }

  export type HistorialCreditoUncheckedUpdateManyWithoutEstadoNuevoNestedInput = {
    create?: XOR<HistorialCreditoCreateWithoutEstadoNuevoInput, HistorialCreditoUncheckedCreateWithoutEstadoNuevoInput> | HistorialCreditoCreateWithoutEstadoNuevoInput[] | HistorialCreditoUncheckedCreateWithoutEstadoNuevoInput[]
    connectOrCreate?: HistorialCreditoCreateOrConnectWithoutEstadoNuevoInput | HistorialCreditoCreateOrConnectWithoutEstadoNuevoInput[]
    upsert?: HistorialCreditoUpsertWithWhereUniqueWithoutEstadoNuevoInput | HistorialCreditoUpsertWithWhereUniqueWithoutEstadoNuevoInput[]
    createMany?: HistorialCreditoCreateManyEstadoNuevoInputEnvelope
    set?: HistorialCreditoWhereUniqueInput | HistorialCreditoWhereUniqueInput[]
    disconnect?: HistorialCreditoWhereUniqueInput | HistorialCreditoWhereUniqueInput[]
    delete?: HistorialCreditoWhereUniqueInput | HistorialCreditoWhereUniqueInput[]
    connect?: HistorialCreditoWhereUniqueInput | HistorialCreditoWhereUniqueInput[]
    update?: HistorialCreditoUpdateWithWhereUniqueWithoutEstadoNuevoInput | HistorialCreditoUpdateWithWhereUniqueWithoutEstadoNuevoInput[]
    updateMany?: HistorialCreditoUpdateManyWithWhereWithoutEstadoNuevoInput | HistorialCreditoUpdateManyWithWhereWithoutEstadoNuevoInput[]
    deleteMany?: HistorialCreditoScalarWhereInput | HistorialCreditoScalarWhereInput[]
  }

  export type CreditoAsociadoCreateNestedManyWithoutFormaPagoInput = {
    create?: XOR<CreditoAsociadoCreateWithoutFormaPagoInput, CreditoAsociadoUncheckedCreateWithoutFormaPagoInput> | CreditoAsociadoCreateWithoutFormaPagoInput[] | CreditoAsociadoUncheckedCreateWithoutFormaPagoInput[]
    connectOrCreate?: CreditoAsociadoCreateOrConnectWithoutFormaPagoInput | CreditoAsociadoCreateOrConnectWithoutFormaPagoInput[]
    createMany?: CreditoAsociadoCreateManyFormaPagoInputEnvelope
    connect?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
  }

  export type CreditoAsociadoUncheckedCreateNestedManyWithoutFormaPagoInput = {
    create?: XOR<CreditoAsociadoCreateWithoutFormaPagoInput, CreditoAsociadoUncheckedCreateWithoutFormaPagoInput> | CreditoAsociadoCreateWithoutFormaPagoInput[] | CreditoAsociadoUncheckedCreateWithoutFormaPagoInput[]
    connectOrCreate?: CreditoAsociadoCreateOrConnectWithoutFormaPagoInput | CreditoAsociadoCreateOrConnectWithoutFormaPagoInput[]
    createMany?: CreditoAsociadoCreateManyFormaPagoInputEnvelope
    connect?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
  }

  export type CreditoAsociadoUpdateManyWithoutFormaPagoNestedInput = {
    create?: XOR<CreditoAsociadoCreateWithoutFormaPagoInput, CreditoAsociadoUncheckedCreateWithoutFormaPagoInput> | CreditoAsociadoCreateWithoutFormaPagoInput[] | CreditoAsociadoUncheckedCreateWithoutFormaPagoInput[]
    connectOrCreate?: CreditoAsociadoCreateOrConnectWithoutFormaPagoInput | CreditoAsociadoCreateOrConnectWithoutFormaPagoInput[]
    upsert?: CreditoAsociadoUpsertWithWhereUniqueWithoutFormaPagoInput | CreditoAsociadoUpsertWithWhereUniqueWithoutFormaPagoInput[]
    createMany?: CreditoAsociadoCreateManyFormaPagoInputEnvelope
    set?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
    disconnect?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
    delete?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
    connect?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
    update?: CreditoAsociadoUpdateWithWhereUniqueWithoutFormaPagoInput | CreditoAsociadoUpdateWithWhereUniqueWithoutFormaPagoInput[]
    updateMany?: CreditoAsociadoUpdateManyWithWhereWithoutFormaPagoInput | CreditoAsociadoUpdateManyWithWhereWithoutFormaPagoInput[]
    deleteMany?: CreditoAsociadoScalarWhereInput | CreditoAsociadoScalarWhereInput[]
  }

  export type CreditoAsociadoUncheckedUpdateManyWithoutFormaPagoNestedInput = {
    create?: XOR<CreditoAsociadoCreateWithoutFormaPagoInput, CreditoAsociadoUncheckedCreateWithoutFormaPagoInput> | CreditoAsociadoCreateWithoutFormaPagoInput[] | CreditoAsociadoUncheckedCreateWithoutFormaPagoInput[]
    connectOrCreate?: CreditoAsociadoCreateOrConnectWithoutFormaPagoInput | CreditoAsociadoCreateOrConnectWithoutFormaPagoInput[]
    upsert?: CreditoAsociadoUpsertWithWhereUniqueWithoutFormaPagoInput | CreditoAsociadoUpsertWithWhereUniqueWithoutFormaPagoInput[]
    createMany?: CreditoAsociadoCreateManyFormaPagoInputEnvelope
    set?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
    disconnect?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
    delete?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
    connect?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
    update?: CreditoAsociadoUpdateWithWhereUniqueWithoutFormaPagoInput | CreditoAsociadoUpdateWithWhereUniqueWithoutFormaPagoInput[]
    updateMany?: CreditoAsociadoUpdateManyWithWhereWithoutFormaPagoInput | CreditoAsociadoUpdateManyWithWhereWithoutFormaPagoInput[]
    deleteMany?: CreditoAsociadoScalarWhereInput | CreditoAsociadoScalarWhereInput[]
  }

  export type TipoDocumentoCreateNestedOneWithoutClientesInput = {
    create?: XOR<TipoDocumentoCreateWithoutClientesInput, TipoDocumentoUncheckedCreateWithoutClientesInput>
    connectOrCreate?: TipoDocumentoCreateOrConnectWithoutClientesInput
    connect?: TipoDocumentoWhereUniqueInput
  }

  export type TipoClienteCreateNestedOneWithoutClientesInput = {
    create?: XOR<TipoClienteCreateWithoutClientesInput, TipoClienteUncheckedCreateWithoutClientesInput>
    connectOrCreate?: TipoClienteCreateOrConnectWithoutClientesInput
    connect?: TipoClienteWhereUniqueInput
  }

  export type CreditoAsociadoCreateNestedManyWithoutClienteInput = {
    create?: XOR<CreditoAsociadoCreateWithoutClienteInput, CreditoAsociadoUncheckedCreateWithoutClienteInput> | CreditoAsociadoCreateWithoutClienteInput[] | CreditoAsociadoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: CreditoAsociadoCreateOrConnectWithoutClienteInput | CreditoAsociadoCreateOrConnectWithoutClienteInput[]
    createMany?: CreditoAsociadoCreateManyClienteInputEnvelope
    connect?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
  }

  export type CreditoAsociadoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<CreditoAsociadoCreateWithoutClienteInput, CreditoAsociadoUncheckedCreateWithoutClienteInput> | CreditoAsociadoCreateWithoutClienteInput[] | CreditoAsociadoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: CreditoAsociadoCreateOrConnectWithoutClienteInput | CreditoAsociadoCreateOrConnectWithoutClienteInput[]
    createMany?: CreditoAsociadoCreateManyClienteInputEnvelope
    connect?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
  }

  export type TipoDocumentoUpdateOneRequiredWithoutClientesNestedInput = {
    create?: XOR<TipoDocumentoCreateWithoutClientesInput, TipoDocumentoUncheckedCreateWithoutClientesInput>
    connectOrCreate?: TipoDocumentoCreateOrConnectWithoutClientesInput
    upsert?: TipoDocumentoUpsertWithoutClientesInput
    connect?: TipoDocumentoWhereUniqueInput
    update?: XOR<XOR<TipoDocumentoUpdateToOneWithWhereWithoutClientesInput, TipoDocumentoUpdateWithoutClientesInput>, TipoDocumentoUncheckedUpdateWithoutClientesInput>
  }

  export type TipoClienteUpdateOneRequiredWithoutClientesNestedInput = {
    create?: XOR<TipoClienteCreateWithoutClientesInput, TipoClienteUncheckedCreateWithoutClientesInput>
    connectOrCreate?: TipoClienteCreateOrConnectWithoutClientesInput
    upsert?: TipoClienteUpsertWithoutClientesInput
    connect?: TipoClienteWhereUniqueInput
    update?: XOR<XOR<TipoClienteUpdateToOneWithWhereWithoutClientesInput, TipoClienteUpdateWithoutClientesInput>, TipoClienteUncheckedUpdateWithoutClientesInput>
  }

  export type CreditoAsociadoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<CreditoAsociadoCreateWithoutClienteInput, CreditoAsociadoUncheckedCreateWithoutClienteInput> | CreditoAsociadoCreateWithoutClienteInput[] | CreditoAsociadoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: CreditoAsociadoCreateOrConnectWithoutClienteInput | CreditoAsociadoCreateOrConnectWithoutClienteInput[]
    upsert?: CreditoAsociadoUpsertWithWhereUniqueWithoutClienteInput | CreditoAsociadoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: CreditoAsociadoCreateManyClienteInputEnvelope
    set?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
    disconnect?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
    delete?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
    connect?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
    update?: CreditoAsociadoUpdateWithWhereUniqueWithoutClienteInput | CreditoAsociadoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: CreditoAsociadoUpdateManyWithWhereWithoutClienteInput | CreditoAsociadoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: CreditoAsociadoScalarWhereInput | CreditoAsociadoScalarWhereInput[]
  }

  export type CreditoAsociadoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<CreditoAsociadoCreateWithoutClienteInput, CreditoAsociadoUncheckedCreateWithoutClienteInput> | CreditoAsociadoCreateWithoutClienteInput[] | CreditoAsociadoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: CreditoAsociadoCreateOrConnectWithoutClienteInput | CreditoAsociadoCreateOrConnectWithoutClienteInput[]
    upsert?: CreditoAsociadoUpsertWithWhereUniqueWithoutClienteInput | CreditoAsociadoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: CreditoAsociadoCreateManyClienteInputEnvelope
    set?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
    disconnect?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
    delete?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
    connect?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
    update?: CreditoAsociadoUpdateWithWhereUniqueWithoutClienteInput | CreditoAsociadoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: CreditoAsociadoUpdateManyWithWhereWithoutClienteInput | CreditoAsociadoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: CreditoAsociadoScalarWhereInput | CreditoAsociadoScalarWhereInput[]
  }

  export type CreditoAsociadoCreateNestedManyWithoutAsesorInput = {
    create?: XOR<CreditoAsociadoCreateWithoutAsesorInput, CreditoAsociadoUncheckedCreateWithoutAsesorInput> | CreditoAsociadoCreateWithoutAsesorInput[] | CreditoAsociadoUncheckedCreateWithoutAsesorInput[]
    connectOrCreate?: CreditoAsociadoCreateOrConnectWithoutAsesorInput | CreditoAsociadoCreateOrConnectWithoutAsesorInput[]
    createMany?: CreditoAsociadoCreateManyAsesorInputEnvelope
    connect?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
  }

  export type CreditoAsociadoUncheckedCreateNestedManyWithoutAsesorInput = {
    create?: XOR<CreditoAsociadoCreateWithoutAsesorInput, CreditoAsociadoUncheckedCreateWithoutAsesorInput> | CreditoAsociadoCreateWithoutAsesorInput[] | CreditoAsociadoUncheckedCreateWithoutAsesorInput[]
    connectOrCreate?: CreditoAsociadoCreateOrConnectWithoutAsesorInput | CreditoAsociadoCreateOrConnectWithoutAsesorInput[]
    createMany?: CreditoAsociadoCreateManyAsesorInputEnvelope
    connect?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
  }

  export type CreditoAsociadoUpdateManyWithoutAsesorNestedInput = {
    create?: XOR<CreditoAsociadoCreateWithoutAsesorInput, CreditoAsociadoUncheckedCreateWithoutAsesorInput> | CreditoAsociadoCreateWithoutAsesorInput[] | CreditoAsociadoUncheckedCreateWithoutAsesorInput[]
    connectOrCreate?: CreditoAsociadoCreateOrConnectWithoutAsesorInput | CreditoAsociadoCreateOrConnectWithoutAsesorInput[]
    upsert?: CreditoAsociadoUpsertWithWhereUniqueWithoutAsesorInput | CreditoAsociadoUpsertWithWhereUniqueWithoutAsesorInput[]
    createMany?: CreditoAsociadoCreateManyAsesorInputEnvelope
    set?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
    disconnect?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
    delete?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
    connect?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
    update?: CreditoAsociadoUpdateWithWhereUniqueWithoutAsesorInput | CreditoAsociadoUpdateWithWhereUniqueWithoutAsesorInput[]
    updateMany?: CreditoAsociadoUpdateManyWithWhereWithoutAsesorInput | CreditoAsociadoUpdateManyWithWhereWithoutAsesorInput[]
    deleteMany?: CreditoAsociadoScalarWhereInput | CreditoAsociadoScalarWhereInput[]
  }

  export type CreditoAsociadoUncheckedUpdateManyWithoutAsesorNestedInput = {
    create?: XOR<CreditoAsociadoCreateWithoutAsesorInput, CreditoAsociadoUncheckedCreateWithoutAsesorInput> | CreditoAsociadoCreateWithoutAsesorInput[] | CreditoAsociadoUncheckedCreateWithoutAsesorInput[]
    connectOrCreate?: CreditoAsociadoCreateOrConnectWithoutAsesorInput | CreditoAsociadoCreateOrConnectWithoutAsesorInput[]
    upsert?: CreditoAsociadoUpsertWithWhereUniqueWithoutAsesorInput | CreditoAsociadoUpsertWithWhereUniqueWithoutAsesorInput[]
    createMany?: CreditoAsociadoCreateManyAsesorInputEnvelope
    set?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
    disconnect?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
    delete?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
    connect?: CreditoAsociadoWhereUniqueInput | CreditoAsociadoWhereUniqueInput[]
    update?: CreditoAsociadoUpdateWithWhereUniqueWithoutAsesorInput | CreditoAsociadoUpdateWithWhereUniqueWithoutAsesorInput[]
    updateMany?: CreditoAsociadoUpdateManyWithWhereWithoutAsesorInput | CreditoAsociadoUpdateManyWithWhereWithoutAsesorInput[]
    deleteMany?: CreditoAsociadoScalarWhereInput | CreditoAsociadoScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutCreditosInput = {
    create?: XOR<ClienteCreateWithoutCreditosInput, ClienteUncheckedCreateWithoutCreditosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutCreditosInput
    connect?: ClienteWhereUniqueInput
  }

  export type TipoCreditoCreateNestedOneWithoutCreditosInput = {
    create?: XOR<TipoCreditoCreateWithoutCreditosInput, TipoCreditoUncheckedCreateWithoutCreditosInput>
    connectOrCreate?: TipoCreditoCreateOrConnectWithoutCreditosInput
    connect?: TipoCreditoWhereUniqueInput
  }

  export type MetodoPagoCreateNestedOneWithoutCreditosInput = {
    create?: XOR<MetodoPagoCreateWithoutCreditosInput, MetodoPagoUncheckedCreateWithoutCreditosInput>
    connectOrCreate?: MetodoPagoCreateOrConnectWithoutCreditosInput
    connect?: MetodoPagoWhereUniqueInput
  }

  export type EstadoCreditoCreateNestedOneWithoutCreditosInput = {
    create?: XOR<EstadoCreditoCreateWithoutCreditosInput, EstadoCreditoUncheckedCreateWithoutCreditosInput>
    connectOrCreate?: EstadoCreditoCreateOrConnectWithoutCreditosInput
    connect?: EstadoCreditoWhereUniqueInput
  }

  export type AsesorCreateNestedOneWithoutCreditosInput = {
    create?: XOR<AsesorCreateWithoutCreditosInput, AsesorUncheckedCreateWithoutCreditosInput>
    connectOrCreate?: AsesorCreateOrConnectWithoutCreditosInput
    connect?: AsesorWhereUniqueInput
  }

  export type HistorialCreditoCreateNestedManyWithoutCreditoInput = {
    create?: XOR<HistorialCreditoCreateWithoutCreditoInput, HistorialCreditoUncheckedCreateWithoutCreditoInput> | HistorialCreditoCreateWithoutCreditoInput[] | HistorialCreditoUncheckedCreateWithoutCreditoInput[]
    connectOrCreate?: HistorialCreditoCreateOrConnectWithoutCreditoInput | HistorialCreditoCreateOrConnectWithoutCreditoInput[]
    createMany?: HistorialCreditoCreateManyCreditoInputEnvelope
    connect?: HistorialCreditoWhereUniqueInput | HistorialCreditoWhereUniqueInput[]
  }

  export type WebhookOutboxCreateNestedManyWithoutCreditoInput = {
    create?: XOR<WebhookOutboxCreateWithoutCreditoInput, WebhookOutboxUncheckedCreateWithoutCreditoInput> | WebhookOutboxCreateWithoutCreditoInput[] | WebhookOutboxUncheckedCreateWithoutCreditoInput[]
    connectOrCreate?: WebhookOutboxCreateOrConnectWithoutCreditoInput | WebhookOutboxCreateOrConnectWithoutCreditoInput[]
    createMany?: WebhookOutboxCreateManyCreditoInputEnvelope
    connect?: WebhookOutboxWhereUniqueInput | WebhookOutboxWhereUniqueInput[]
  }

  export type HistorialCreditoUncheckedCreateNestedManyWithoutCreditoInput = {
    create?: XOR<HistorialCreditoCreateWithoutCreditoInput, HistorialCreditoUncheckedCreateWithoutCreditoInput> | HistorialCreditoCreateWithoutCreditoInput[] | HistorialCreditoUncheckedCreateWithoutCreditoInput[]
    connectOrCreate?: HistorialCreditoCreateOrConnectWithoutCreditoInput | HistorialCreditoCreateOrConnectWithoutCreditoInput[]
    createMany?: HistorialCreditoCreateManyCreditoInputEnvelope
    connect?: HistorialCreditoWhereUniqueInput | HistorialCreditoWhereUniqueInput[]
  }

  export type WebhookOutboxUncheckedCreateNestedManyWithoutCreditoInput = {
    create?: XOR<WebhookOutboxCreateWithoutCreditoInput, WebhookOutboxUncheckedCreateWithoutCreditoInput> | WebhookOutboxCreateWithoutCreditoInput[] | WebhookOutboxUncheckedCreateWithoutCreditoInput[]
    connectOrCreate?: WebhookOutboxCreateOrConnectWithoutCreditoInput | WebhookOutboxCreateOrConnectWithoutCreditoInput[]
    createMany?: WebhookOutboxCreateManyCreditoInputEnvelope
    connect?: WebhookOutboxWhereUniqueInput | WebhookOutboxWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ClienteUpdateOneRequiredWithoutCreditosNestedInput = {
    create?: XOR<ClienteCreateWithoutCreditosInput, ClienteUncheckedCreateWithoutCreditosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutCreditosInput
    upsert?: ClienteUpsertWithoutCreditosInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutCreditosInput, ClienteUpdateWithoutCreditosInput>, ClienteUncheckedUpdateWithoutCreditosInput>
  }

  export type TipoCreditoUpdateOneRequiredWithoutCreditosNestedInput = {
    create?: XOR<TipoCreditoCreateWithoutCreditosInput, TipoCreditoUncheckedCreateWithoutCreditosInput>
    connectOrCreate?: TipoCreditoCreateOrConnectWithoutCreditosInput
    upsert?: TipoCreditoUpsertWithoutCreditosInput
    connect?: TipoCreditoWhereUniqueInput
    update?: XOR<XOR<TipoCreditoUpdateToOneWithWhereWithoutCreditosInput, TipoCreditoUpdateWithoutCreditosInput>, TipoCreditoUncheckedUpdateWithoutCreditosInput>
  }

  export type MetodoPagoUpdateOneRequiredWithoutCreditosNestedInput = {
    create?: XOR<MetodoPagoCreateWithoutCreditosInput, MetodoPagoUncheckedCreateWithoutCreditosInput>
    connectOrCreate?: MetodoPagoCreateOrConnectWithoutCreditosInput
    upsert?: MetodoPagoUpsertWithoutCreditosInput
    connect?: MetodoPagoWhereUniqueInput
    update?: XOR<XOR<MetodoPagoUpdateToOneWithWhereWithoutCreditosInput, MetodoPagoUpdateWithoutCreditosInput>, MetodoPagoUncheckedUpdateWithoutCreditosInput>
  }

  export type EstadoCreditoUpdateOneRequiredWithoutCreditosNestedInput = {
    create?: XOR<EstadoCreditoCreateWithoutCreditosInput, EstadoCreditoUncheckedCreateWithoutCreditosInput>
    connectOrCreate?: EstadoCreditoCreateOrConnectWithoutCreditosInput
    upsert?: EstadoCreditoUpsertWithoutCreditosInput
    connect?: EstadoCreditoWhereUniqueInput
    update?: XOR<XOR<EstadoCreditoUpdateToOneWithWhereWithoutCreditosInput, EstadoCreditoUpdateWithoutCreditosInput>, EstadoCreditoUncheckedUpdateWithoutCreditosInput>
  }

  export type AsesorUpdateOneWithoutCreditosNestedInput = {
    create?: XOR<AsesorCreateWithoutCreditosInput, AsesorUncheckedCreateWithoutCreditosInput>
    connectOrCreate?: AsesorCreateOrConnectWithoutCreditosInput
    upsert?: AsesorUpsertWithoutCreditosInput
    disconnect?: AsesorWhereInput | boolean
    delete?: AsesorWhereInput | boolean
    connect?: AsesorWhereUniqueInput
    update?: XOR<XOR<AsesorUpdateToOneWithWhereWithoutCreditosInput, AsesorUpdateWithoutCreditosInput>, AsesorUncheckedUpdateWithoutCreditosInput>
  }

  export type HistorialCreditoUpdateManyWithoutCreditoNestedInput = {
    create?: XOR<HistorialCreditoCreateWithoutCreditoInput, HistorialCreditoUncheckedCreateWithoutCreditoInput> | HistorialCreditoCreateWithoutCreditoInput[] | HistorialCreditoUncheckedCreateWithoutCreditoInput[]
    connectOrCreate?: HistorialCreditoCreateOrConnectWithoutCreditoInput | HistorialCreditoCreateOrConnectWithoutCreditoInput[]
    upsert?: HistorialCreditoUpsertWithWhereUniqueWithoutCreditoInput | HistorialCreditoUpsertWithWhereUniqueWithoutCreditoInput[]
    createMany?: HistorialCreditoCreateManyCreditoInputEnvelope
    set?: HistorialCreditoWhereUniqueInput | HistorialCreditoWhereUniqueInput[]
    disconnect?: HistorialCreditoWhereUniqueInput | HistorialCreditoWhereUniqueInput[]
    delete?: HistorialCreditoWhereUniqueInput | HistorialCreditoWhereUniqueInput[]
    connect?: HistorialCreditoWhereUniqueInput | HistorialCreditoWhereUniqueInput[]
    update?: HistorialCreditoUpdateWithWhereUniqueWithoutCreditoInput | HistorialCreditoUpdateWithWhereUniqueWithoutCreditoInput[]
    updateMany?: HistorialCreditoUpdateManyWithWhereWithoutCreditoInput | HistorialCreditoUpdateManyWithWhereWithoutCreditoInput[]
    deleteMany?: HistorialCreditoScalarWhereInput | HistorialCreditoScalarWhereInput[]
  }

  export type WebhookOutboxUpdateManyWithoutCreditoNestedInput = {
    create?: XOR<WebhookOutboxCreateWithoutCreditoInput, WebhookOutboxUncheckedCreateWithoutCreditoInput> | WebhookOutboxCreateWithoutCreditoInput[] | WebhookOutboxUncheckedCreateWithoutCreditoInput[]
    connectOrCreate?: WebhookOutboxCreateOrConnectWithoutCreditoInput | WebhookOutboxCreateOrConnectWithoutCreditoInput[]
    upsert?: WebhookOutboxUpsertWithWhereUniqueWithoutCreditoInput | WebhookOutboxUpsertWithWhereUniqueWithoutCreditoInput[]
    createMany?: WebhookOutboxCreateManyCreditoInputEnvelope
    set?: WebhookOutboxWhereUniqueInput | WebhookOutboxWhereUniqueInput[]
    disconnect?: WebhookOutboxWhereUniqueInput | WebhookOutboxWhereUniqueInput[]
    delete?: WebhookOutboxWhereUniqueInput | WebhookOutboxWhereUniqueInput[]
    connect?: WebhookOutboxWhereUniqueInput | WebhookOutboxWhereUniqueInput[]
    update?: WebhookOutboxUpdateWithWhereUniqueWithoutCreditoInput | WebhookOutboxUpdateWithWhereUniqueWithoutCreditoInput[]
    updateMany?: WebhookOutboxUpdateManyWithWhereWithoutCreditoInput | WebhookOutboxUpdateManyWithWhereWithoutCreditoInput[]
    deleteMany?: WebhookOutboxScalarWhereInput | WebhookOutboxScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type HistorialCreditoUncheckedUpdateManyWithoutCreditoNestedInput = {
    create?: XOR<HistorialCreditoCreateWithoutCreditoInput, HistorialCreditoUncheckedCreateWithoutCreditoInput> | HistorialCreditoCreateWithoutCreditoInput[] | HistorialCreditoUncheckedCreateWithoutCreditoInput[]
    connectOrCreate?: HistorialCreditoCreateOrConnectWithoutCreditoInput | HistorialCreditoCreateOrConnectWithoutCreditoInput[]
    upsert?: HistorialCreditoUpsertWithWhereUniqueWithoutCreditoInput | HistorialCreditoUpsertWithWhereUniqueWithoutCreditoInput[]
    createMany?: HistorialCreditoCreateManyCreditoInputEnvelope
    set?: HistorialCreditoWhereUniqueInput | HistorialCreditoWhereUniqueInput[]
    disconnect?: HistorialCreditoWhereUniqueInput | HistorialCreditoWhereUniqueInput[]
    delete?: HistorialCreditoWhereUniqueInput | HistorialCreditoWhereUniqueInput[]
    connect?: HistorialCreditoWhereUniqueInput | HistorialCreditoWhereUniqueInput[]
    update?: HistorialCreditoUpdateWithWhereUniqueWithoutCreditoInput | HistorialCreditoUpdateWithWhereUniqueWithoutCreditoInput[]
    updateMany?: HistorialCreditoUpdateManyWithWhereWithoutCreditoInput | HistorialCreditoUpdateManyWithWhereWithoutCreditoInput[]
    deleteMany?: HistorialCreditoScalarWhereInput | HistorialCreditoScalarWhereInput[]
  }

  export type WebhookOutboxUncheckedUpdateManyWithoutCreditoNestedInput = {
    create?: XOR<WebhookOutboxCreateWithoutCreditoInput, WebhookOutboxUncheckedCreateWithoutCreditoInput> | WebhookOutboxCreateWithoutCreditoInput[] | WebhookOutboxUncheckedCreateWithoutCreditoInput[]
    connectOrCreate?: WebhookOutboxCreateOrConnectWithoutCreditoInput | WebhookOutboxCreateOrConnectWithoutCreditoInput[]
    upsert?: WebhookOutboxUpsertWithWhereUniqueWithoutCreditoInput | WebhookOutboxUpsertWithWhereUniqueWithoutCreditoInput[]
    createMany?: WebhookOutboxCreateManyCreditoInputEnvelope
    set?: WebhookOutboxWhereUniqueInput | WebhookOutboxWhereUniqueInput[]
    disconnect?: WebhookOutboxWhereUniqueInput | WebhookOutboxWhereUniqueInput[]
    delete?: WebhookOutboxWhereUniqueInput | WebhookOutboxWhereUniqueInput[]
    connect?: WebhookOutboxWhereUniqueInput | WebhookOutboxWhereUniqueInput[]
    update?: WebhookOutboxUpdateWithWhereUniqueWithoutCreditoInput | WebhookOutboxUpdateWithWhereUniqueWithoutCreditoInput[]
    updateMany?: WebhookOutboxUpdateManyWithWhereWithoutCreditoInput | WebhookOutboxUpdateManyWithWhereWithoutCreditoInput[]
    deleteMany?: WebhookOutboxScalarWhereInput | WebhookOutboxScalarWhereInput[]
  }

  export type CreditoAsociadoCreateNestedOneWithoutHistorialInput = {
    create?: XOR<CreditoAsociadoCreateWithoutHistorialInput, CreditoAsociadoUncheckedCreateWithoutHistorialInput>
    connectOrCreate?: CreditoAsociadoCreateOrConnectWithoutHistorialInput
    connect?: CreditoAsociadoWhereUniqueInput
  }

  export type EstadoCreditoCreateNestedOneWithoutHistorialOrigenInput = {
    create?: XOR<EstadoCreditoCreateWithoutHistorialOrigenInput, EstadoCreditoUncheckedCreateWithoutHistorialOrigenInput>
    connectOrCreate?: EstadoCreditoCreateOrConnectWithoutHistorialOrigenInput
    connect?: EstadoCreditoWhereUniqueInput
  }

  export type EstadoCreditoCreateNestedOneWithoutHistorialDestinoInput = {
    create?: XOR<EstadoCreditoCreateWithoutHistorialDestinoInput, EstadoCreditoUncheckedCreateWithoutHistorialDestinoInput>
    connectOrCreate?: EstadoCreditoCreateOrConnectWithoutHistorialDestinoInput
    connect?: EstadoCreditoWhereUniqueInput
  }

  export type CreditoAsociadoUpdateOneRequiredWithoutHistorialNestedInput = {
    create?: XOR<CreditoAsociadoCreateWithoutHistorialInput, CreditoAsociadoUncheckedCreateWithoutHistorialInput>
    connectOrCreate?: CreditoAsociadoCreateOrConnectWithoutHistorialInput
    upsert?: CreditoAsociadoUpsertWithoutHistorialInput
    connect?: CreditoAsociadoWhereUniqueInput
    update?: XOR<XOR<CreditoAsociadoUpdateToOneWithWhereWithoutHistorialInput, CreditoAsociadoUpdateWithoutHistorialInput>, CreditoAsociadoUncheckedUpdateWithoutHistorialInput>
  }

  export type EstadoCreditoUpdateOneWithoutHistorialOrigenNestedInput = {
    create?: XOR<EstadoCreditoCreateWithoutHistorialOrigenInput, EstadoCreditoUncheckedCreateWithoutHistorialOrigenInput>
    connectOrCreate?: EstadoCreditoCreateOrConnectWithoutHistorialOrigenInput
    upsert?: EstadoCreditoUpsertWithoutHistorialOrigenInput
    disconnect?: EstadoCreditoWhereInput | boolean
    delete?: EstadoCreditoWhereInput | boolean
    connect?: EstadoCreditoWhereUniqueInput
    update?: XOR<XOR<EstadoCreditoUpdateToOneWithWhereWithoutHistorialOrigenInput, EstadoCreditoUpdateWithoutHistorialOrigenInput>, EstadoCreditoUncheckedUpdateWithoutHistorialOrigenInput>
  }

  export type EstadoCreditoUpdateOneRequiredWithoutHistorialDestinoNestedInput = {
    create?: XOR<EstadoCreditoCreateWithoutHistorialDestinoInput, EstadoCreditoUncheckedCreateWithoutHistorialDestinoInput>
    connectOrCreate?: EstadoCreditoCreateOrConnectWithoutHistorialDestinoInput
    upsert?: EstadoCreditoUpsertWithoutHistorialDestinoInput
    connect?: EstadoCreditoWhereUniqueInput
    update?: XOR<XOR<EstadoCreditoUpdateToOneWithWhereWithoutHistorialDestinoInput, EstadoCreditoUpdateWithoutHistorialDestinoInput>, EstadoCreditoUncheckedUpdateWithoutHistorialDestinoInput>
  }

  export type CreditoAsociadoCreateNestedOneWithoutWebhookOutboxInput = {
    create?: XOR<CreditoAsociadoCreateWithoutWebhookOutboxInput, CreditoAsociadoUncheckedCreateWithoutWebhookOutboxInput>
    connectOrCreate?: CreditoAsociadoCreateOrConnectWithoutWebhookOutboxInput
    connect?: CreditoAsociadoWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CreditoAsociadoUpdateOneRequiredWithoutWebhookOutboxNestedInput = {
    create?: XOR<CreditoAsociadoCreateWithoutWebhookOutboxInput, CreditoAsociadoUncheckedCreateWithoutWebhookOutboxInput>
    connectOrCreate?: CreditoAsociadoCreateOrConnectWithoutWebhookOutboxInput
    upsert?: CreditoAsociadoUpsertWithoutWebhookOutboxInput
    connect?: CreditoAsociadoWhereUniqueInput
    update?: XOR<XOR<CreditoAsociadoUpdateToOneWithWhereWithoutWebhookOutboxInput, CreditoAsociadoUpdateWithoutWebhookOutboxInput>, CreditoAsociadoUncheckedUpdateWithoutWebhookOutboxInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ClienteCreateWithoutTipoClienteInput = {
    documento: string
    nombres: string
    apellidos: string
    activo?: boolean
    fechaRegistro?: Date | string
    TipoDocumento: TipoDocumentoCreateNestedOneWithoutClientesInput
    creditos?: CreditoAsociadoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutTipoClienteInput = {
    id?: number
    documento: string
    nombres: string
    apellidos: string
    idTipoDocumento: number
    activo?: boolean
    fechaRegistro?: Date | string
    creditos?: CreditoAsociadoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutTipoClienteInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutTipoClienteInput, ClienteUncheckedCreateWithoutTipoClienteInput>
  }

  export type ClienteCreateManyTipoClienteInputEnvelope = {
    data: ClienteCreateManyTipoClienteInput | ClienteCreateManyTipoClienteInput[]
  }

  export type ClienteUpsertWithWhereUniqueWithoutTipoClienteInput = {
    where: ClienteWhereUniqueInput
    update: XOR<ClienteUpdateWithoutTipoClienteInput, ClienteUncheckedUpdateWithoutTipoClienteInput>
    create: XOR<ClienteCreateWithoutTipoClienteInput, ClienteUncheckedCreateWithoutTipoClienteInput>
  }

  export type ClienteUpdateWithWhereUniqueWithoutTipoClienteInput = {
    where: ClienteWhereUniqueInput
    data: XOR<ClienteUpdateWithoutTipoClienteInput, ClienteUncheckedUpdateWithoutTipoClienteInput>
  }

  export type ClienteUpdateManyWithWhereWithoutTipoClienteInput = {
    where: ClienteScalarWhereInput
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyWithoutTipoClienteInput>
  }

  export type ClienteScalarWhereInput = {
    AND?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
    OR?: ClienteScalarWhereInput[]
    NOT?: ClienteScalarWhereInput | ClienteScalarWhereInput[]
    id?: IntFilter<"Cliente"> | number
    documento?: StringFilter<"Cliente"> | string
    nombres?: StringFilter<"Cliente"> | string
    apellidos?: StringFilter<"Cliente"> | string
    idTipoDocumento?: IntFilter<"Cliente"> | number
    idTipoCliente?: IntFilter<"Cliente"> | number
    activo?: BoolFilter<"Cliente"> | boolean
    fechaRegistro?: DateTimeFilter<"Cliente"> | Date | string
  }

  export type ClienteCreateWithoutTipoDocumentoInput = {
    documento: string
    nombres: string
    apellidos: string
    activo?: boolean
    fechaRegistro?: Date | string
    TipoCliente: TipoClienteCreateNestedOneWithoutClientesInput
    creditos?: CreditoAsociadoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutTipoDocumentoInput = {
    id?: number
    documento: string
    nombres: string
    apellidos: string
    idTipoCliente: number
    activo?: boolean
    fechaRegistro?: Date | string
    creditos?: CreditoAsociadoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutTipoDocumentoInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutTipoDocumentoInput, ClienteUncheckedCreateWithoutTipoDocumentoInput>
  }

  export type ClienteCreateManyTipoDocumentoInputEnvelope = {
    data: ClienteCreateManyTipoDocumentoInput | ClienteCreateManyTipoDocumentoInput[]
  }

  export type ClienteUpsertWithWhereUniqueWithoutTipoDocumentoInput = {
    where: ClienteWhereUniqueInput
    update: XOR<ClienteUpdateWithoutTipoDocumentoInput, ClienteUncheckedUpdateWithoutTipoDocumentoInput>
    create: XOR<ClienteCreateWithoutTipoDocumentoInput, ClienteUncheckedCreateWithoutTipoDocumentoInput>
  }

  export type ClienteUpdateWithWhereUniqueWithoutTipoDocumentoInput = {
    where: ClienteWhereUniqueInput
    data: XOR<ClienteUpdateWithoutTipoDocumentoInput, ClienteUncheckedUpdateWithoutTipoDocumentoInput>
  }

  export type ClienteUpdateManyWithWhereWithoutTipoDocumentoInput = {
    where: ClienteScalarWhereInput
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyWithoutTipoDocumentoInput>
  }

  export type CreditoAsociadoCreateWithoutTipoCreditoInput = {
    numeroCredito: string
    identificacionAsociado: string
    nombreAsociado: string
    valorSolicitado: Decimal | DecimalJsLike | number | string
    tasaInteres: Decimal | DecimalJsLike | number | string
    numeroCuotas: number
    entidadId?: number
    activo?: boolean
    createdBy: string
    updatedBy?: string | null
    fechaSolicitud?: Date | string
    fechaActualizacion?: Date | string
    Cliente: ClienteCreateNestedOneWithoutCreditosInput
    FormaPago: MetodoPagoCreateNestedOneWithoutCreditosInput
    Estado: EstadoCreditoCreateNestedOneWithoutCreditosInput
    Asesor?: AsesorCreateNestedOneWithoutCreditosInput
    historial?: HistorialCreditoCreateNestedManyWithoutCreditoInput
    webhookOutbox?: WebhookOutboxCreateNestedManyWithoutCreditoInput
  }

  export type CreditoAsociadoUncheckedCreateWithoutTipoCreditoInput = {
    id?: number
    numeroCredito: string
    identificacionAsociado: string
    nombreAsociado: string
    idCliente: number
    idFormaPago: number
    idEstadoCredito: number
    idAsesor?: number | null
    valorSolicitado: Decimal | DecimalJsLike | number | string
    tasaInteres: Decimal | DecimalJsLike | number | string
    numeroCuotas: number
    entidadId?: number
    activo?: boolean
    createdBy: string
    updatedBy?: string | null
    fechaSolicitud?: Date | string
    fechaActualizacion?: Date | string
    historial?: HistorialCreditoUncheckedCreateNestedManyWithoutCreditoInput
    webhookOutbox?: WebhookOutboxUncheckedCreateNestedManyWithoutCreditoInput
  }

  export type CreditoAsociadoCreateOrConnectWithoutTipoCreditoInput = {
    where: CreditoAsociadoWhereUniqueInput
    create: XOR<CreditoAsociadoCreateWithoutTipoCreditoInput, CreditoAsociadoUncheckedCreateWithoutTipoCreditoInput>
  }

  export type CreditoAsociadoCreateManyTipoCreditoInputEnvelope = {
    data: CreditoAsociadoCreateManyTipoCreditoInput | CreditoAsociadoCreateManyTipoCreditoInput[]
  }

  export type CreditoAsociadoUpsertWithWhereUniqueWithoutTipoCreditoInput = {
    where: CreditoAsociadoWhereUniqueInput
    update: XOR<CreditoAsociadoUpdateWithoutTipoCreditoInput, CreditoAsociadoUncheckedUpdateWithoutTipoCreditoInput>
    create: XOR<CreditoAsociadoCreateWithoutTipoCreditoInput, CreditoAsociadoUncheckedCreateWithoutTipoCreditoInput>
  }

  export type CreditoAsociadoUpdateWithWhereUniqueWithoutTipoCreditoInput = {
    where: CreditoAsociadoWhereUniqueInput
    data: XOR<CreditoAsociadoUpdateWithoutTipoCreditoInput, CreditoAsociadoUncheckedUpdateWithoutTipoCreditoInput>
  }

  export type CreditoAsociadoUpdateManyWithWhereWithoutTipoCreditoInput = {
    where: CreditoAsociadoScalarWhereInput
    data: XOR<CreditoAsociadoUpdateManyMutationInput, CreditoAsociadoUncheckedUpdateManyWithoutTipoCreditoInput>
  }

  export type CreditoAsociadoScalarWhereInput = {
    AND?: CreditoAsociadoScalarWhereInput | CreditoAsociadoScalarWhereInput[]
    OR?: CreditoAsociadoScalarWhereInput[]
    NOT?: CreditoAsociadoScalarWhereInput | CreditoAsociadoScalarWhereInput[]
    id?: IntFilter<"CreditoAsociado"> | number
    numeroCredito?: StringFilter<"CreditoAsociado"> | string
    identificacionAsociado?: StringFilter<"CreditoAsociado"> | string
    nombreAsociado?: StringFilter<"CreditoAsociado"> | string
    idCliente?: IntFilter<"CreditoAsociado"> | number
    idTipoCredito?: IntFilter<"CreditoAsociado"> | number
    idFormaPago?: IntFilter<"CreditoAsociado"> | number
    idEstadoCredito?: IntFilter<"CreditoAsociado"> | number
    idAsesor?: IntNullableFilter<"CreditoAsociado"> | number | null
    valorSolicitado?: DecimalFilter<"CreditoAsociado"> | Decimal | DecimalJsLike | number | string
    tasaInteres?: DecimalFilter<"CreditoAsociado"> | Decimal | DecimalJsLike | number | string
    numeroCuotas?: IntFilter<"CreditoAsociado"> | number
    entidadId?: IntFilter<"CreditoAsociado"> | number
    activo?: BoolFilter<"CreditoAsociado"> | boolean
    createdBy?: StringFilter<"CreditoAsociado"> | string
    updatedBy?: StringNullableFilter<"CreditoAsociado"> | string | null
    fechaSolicitud?: DateTimeFilter<"CreditoAsociado"> | Date | string
    fechaActualizacion?: DateTimeFilter<"CreditoAsociado"> | Date | string
  }

  export type CreditoAsociadoCreateWithoutEstadoInput = {
    numeroCredito: string
    identificacionAsociado: string
    nombreAsociado: string
    valorSolicitado: Decimal | DecimalJsLike | number | string
    tasaInteres: Decimal | DecimalJsLike | number | string
    numeroCuotas: number
    entidadId?: number
    activo?: boolean
    createdBy: string
    updatedBy?: string | null
    fechaSolicitud?: Date | string
    fechaActualizacion?: Date | string
    Cliente: ClienteCreateNestedOneWithoutCreditosInput
    TipoCredito: TipoCreditoCreateNestedOneWithoutCreditosInput
    FormaPago: MetodoPagoCreateNestedOneWithoutCreditosInput
    Asesor?: AsesorCreateNestedOneWithoutCreditosInput
    historial?: HistorialCreditoCreateNestedManyWithoutCreditoInput
    webhookOutbox?: WebhookOutboxCreateNestedManyWithoutCreditoInput
  }

  export type CreditoAsociadoUncheckedCreateWithoutEstadoInput = {
    id?: number
    numeroCredito: string
    identificacionAsociado: string
    nombreAsociado: string
    idCliente: number
    idTipoCredito: number
    idFormaPago: number
    idAsesor?: number | null
    valorSolicitado: Decimal | DecimalJsLike | number | string
    tasaInteres: Decimal | DecimalJsLike | number | string
    numeroCuotas: number
    entidadId?: number
    activo?: boolean
    createdBy: string
    updatedBy?: string | null
    fechaSolicitud?: Date | string
    fechaActualizacion?: Date | string
    historial?: HistorialCreditoUncheckedCreateNestedManyWithoutCreditoInput
    webhookOutbox?: WebhookOutboxUncheckedCreateNestedManyWithoutCreditoInput
  }

  export type CreditoAsociadoCreateOrConnectWithoutEstadoInput = {
    where: CreditoAsociadoWhereUniqueInput
    create: XOR<CreditoAsociadoCreateWithoutEstadoInput, CreditoAsociadoUncheckedCreateWithoutEstadoInput>
  }

  export type CreditoAsociadoCreateManyEstadoInputEnvelope = {
    data: CreditoAsociadoCreateManyEstadoInput | CreditoAsociadoCreateManyEstadoInput[]
  }

  export type HistorialCreditoCreateWithoutEstadoAnteriorInput = {
    tipoCambio: string
    estadoAnterior?: string | null
    estadoNuevo: string
    usuario: string
    observacion?: string | null
    camposModificados?: string | null
    fecha?: Date | string
    Credito: CreditoAsociadoCreateNestedOneWithoutHistorialInput
    EstadoNuevo: EstadoCreditoCreateNestedOneWithoutHistorialDestinoInput
  }

  export type HistorialCreditoUncheckedCreateWithoutEstadoAnteriorInput = {
    id?: number
    idCredito: number
    tipoCambio: string
    idEstadoNuevo: number
    estadoAnterior?: string | null
    estadoNuevo: string
    usuario: string
    observacion?: string | null
    camposModificados?: string | null
    fecha?: Date | string
  }

  export type HistorialCreditoCreateOrConnectWithoutEstadoAnteriorInput = {
    where: HistorialCreditoWhereUniqueInput
    create: XOR<HistorialCreditoCreateWithoutEstadoAnteriorInput, HistorialCreditoUncheckedCreateWithoutEstadoAnteriorInput>
  }

  export type HistorialCreditoCreateManyEstadoAnteriorInputEnvelope = {
    data: HistorialCreditoCreateManyEstadoAnteriorInput | HistorialCreditoCreateManyEstadoAnteriorInput[]
  }

  export type HistorialCreditoCreateWithoutEstadoNuevoInput = {
    tipoCambio: string
    estadoAnterior?: string | null
    estadoNuevo: string
    usuario: string
    observacion?: string | null
    camposModificados?: string | null
    fecha?: Date | string
    Credito: CreditoAsociadoCreateNestedOneWithoutHistorialInput
    EstadoAnterior?: EstadoCreditoCreateNestedOneWithoutHistorialOrigenInput
  }

  export type HistorialCreditoUncheckedCreateWithoutEstadoNuevoInput = {
    id?: number
    idCredito: number
    tipoCambio: string
    idEstadoAnterior?: number | null
    estadoAnterior?: string | null
    estadoNuevo: string
    usuario: string
    observacion?: string | null
    camposModificados?: string | null
    fecha?: Date | string
  }

  export type HistorialCreditoCreateOrConnectWithoutEstadoNuevoInput = {
    where: HistorialCreditoWhereUniqueInput
    create: XOR<HistorialCreditoCreateWithoutEstadoNuevoInput, HistorialCreditoUncheckedCreateWithoutEstadoNuevoInput>
  }

  export type HistorialCreditoCreateManyEstadoNuevoInputEnvelope = {
    data: HistorialCreditoCreateManyEstadoNuevoInput | HistorialCreditoCreateManyEstadoNuevoInput[]
  }

  export type CreditoAsociadoUpsertWithWhereUniqueWithoutEstadoInput = {
    where: CreditoAsociadoWhereUniqueInput
    update: XOR<CreditoAsociadoUpdateWithoutEstadoInput, CreditoAsociadoUncheckedUpdateWithoutEstadoInput>
    create: XOR<CreditoAsociadoCreateWithoutEstadoInput, CreditoAsociadoUncheckedCreateWithoutEstadoInput>
  }

  export type CreditoAsociadoUpdateWithWhereUniqueWithoutEstadoInput = {
    where: CreditoAsociadoWhereUniqueInput
    data: XOR<CreditoAsociadoUpdateWithoutEstadoInput, CreditoAsociadoUncheckedUpdateWithoutEstadoInput>
  }

  export type CreditoAsociadoUpdateManyWithWhereWithoutEstadoInput = {
    where: CreditoAsociadoScalarWhereInput
    data: XOR<CreditoAsociadoUpdateManyMutationInput, CreditoAsociadoUncheckedUpdateManyWithoutEstadoInput>
  }

  export type HistorialCreditoUpsertWithWhereUniqueWithoutEstadoAnteriorInput = {
    where: HistorialCreditoWhereUniqueInput
    update: XOR<HistorialCreditoUpdateWithoutEstadoAnteriorInput, HistorialCreditoUncheckedUpdateWithoutEstadoAnteriorInput>
    create: XOR<HistorialCreditoCreateWithoutEstadoAnteriorInput, HistorialCreditoUncheckedCreateWithoutEstadoAnteriorInput>
  }

  export type HistorialCreditoUpdateWithWhereUniqueWithoutEstadoAnteriorInput = {
    where: HistorialCreditoWhereUniqueInput
    data: XOR<HistorialCreditoUpdateWithoutEstadoAnteriorInput, HistorialCreditoUncheckedUpdateWithoutEstadoAnteriorInput>
  }

  export type HistorialCreditoUpdateManyWithWhereWithoutEstadoAnteriorInput = {
    where: HistorialCreditoScalarWhereInput
    data: XOR<HistorialCreditoUpdateManyMutationInput, HistorialCreditoUncheckedUpdateManyWithoutEstadoAnteriorInput>
  }

  export type HistorialCreditoScalarWhereInput = {
    AND?: HistorialCreditoScalarWhereInput | HistorialCreditoScalarWhereInput[]
    OR?: HistorialCreditoScalarWhereInput[]
    NOT?: HistorialCreditoScalarWhereInput | HistorialCreditoScalarWhereInput[]
    id?: IntFilter<"HistorialCredito"> | number
    idCredito?: IntFilter<"HistorialCredito"> | number
    tipoCambio?: StringFilter<"HistorialCredito"> | string
    idEstadoAnterior?: IntNullableFilter<"HistorialCredito"> | number | null
    idEstadoNuevo?: IntFilter<"HistorialCredito"> | number
    estadoAnterior?: StringNullableFilter<"HistorialCredito"> | string | null
    estadoNuevo?: StringFilter<"HistorialCredito"> | string
    usuario?: StringFilter<"HistorialCredito"> | string
    observacion?: StringNullableFilter<"HistorialCredito"> | string | null
    camposModificados?: StringNullableFilter<"HistorialCredito"> | string | null
    fecha?: DateTimeFilter<"HistorialCredito"> | Date | string
  }

  export type HistorialCreditoUpsertWithWhereUniqueWithoutEstadoNuevoInput = {
    where: HistorialCreditoWhereUniqueInput
    update: XOR<HistorialCreditoUpdateWithoutEstadoNuevoInput, HistorialCreditoUncheckedUpdateWithoutEstadoNuevoInput>
    create: XOR<HistorialCreditoCreateWithoutEstadoNuevoInput, HistorialCreditoUncheckedCreateWithoutEstadoNuevoInput>
  }

  export type HistorialCreditoUpdateWithWhereUniqueWithoutEstadoNuevoInput = {
    where: HistorialCreditoWhereUniqueInput
    data: XOR<HistorialCreditoUpdateWithoutEstadoNuevoInput, HistorialCreditoUncheckedUpdateWithoutEstadoNuevoInput>
  }

  export type HistorialCreditoUpdateManyWithWhereWithoutEstadoNuevoInput = {
    where: HistorialCreditoScalarWhereInput
    data: XOR<HistorialCreditoUpdateManyMutationInput, HistorialCreditoUncheckedUpdateManyWithoutEstadoNuevoInput>
  }

  export type CreditoAsociadoCreateWithoutFormaPagoInput = {
    numeroCredito: string
    identificacionAsociado: string
    nombreAsociado: string
    valorSolicitado: Decimal | DecimalJsLike | number | string
    tasaInteres: Decimal | DecimalJsLike | number | string
    numeroCuotas: number
    entidadId?: number
    activo?: boolean
    createdBy: string
    updatedBy?: string | null
    fechaSolicitud?: Date | string
    fechaActualizacion?: Date | string
    Cliente: ClienteCreateNestedOneWithoutCreditosInput
    TipoCredito: TipoCreditoCreateNestedOneWithoutCreditosInput
    Estado: EstadoCreditoCreateNestedOneWithoutCreditosInput
    Asesor?: AsesorCreateNestedOneWithoutCreditosInput
    historial?: HistorialCreditoCreateNestedManyWithoutCreditoInput
    webhookOutbox?: WebhookOutboxCreateNestedManyWithoutCreditoInput
  }

  export type CreditoAsociadoUncheckedCreateWithoutFormaPagoInput = {
    id?: number
    numeroCredito: string
    identificacionAsociado: string
    nombreAsociado: string
    idCliente: number
    idTipoCredito: number
    idEstadoCredito: number
    idAsesor?: number | null
    valorSolicitado: Decimal | DecimalJsLike | number | string
    tasaInteres: Decimal | DecimalJsLike | number | string
    numeroCuotas: number
    entidadId?: number
    activo?: boolean
    createdBy: string
    updatedBy?: string | null
    fechaSolicitud?: Date | string
    fechaActualizacion?: Date | string
    historial?: HistorialCreditoUncheckedCreateNestedManyWithoutCreditoInput
    webhookOutbox?: WebhookOutboxUncheckedCreateNestedManyWithoutCreditoInput
  }

  export type CreditoAsociadoCreateOrConnectWithoutFormaPagoInput = {
    where: CreditoAsociadoWhereUniqueInput
    create: XOR<CreditoAsociadoCreateWithoutFormaPagoInput, CreditoAsociadoUncheckedCreateWithoutFormaPagoInput>
  }

  export type CreditoAsociadoCreateManyFormaPagoInputEnvelope = {
    data: CreditoAsociadoCreateManyFormaPagoInput | CreditoAsociadoCreateManyFormaPagoInput[]
  }

  export type CreditoAsociadoUpsertWithWhereUniqueWithoutFormaPagoInput = {
    where: CreditoAsociadoWhereUniqueInput
    update: XOR<CreditoAsociadoUpdateWithoutFormaPagoInput, CreditoAsociadoUncheckedUpdateWithoutFormaPagoInput>
    create: XOR<CreditoAsociadoCreateWithoutFormaPagoInput, CreditoAsociadoUncheckedCreateWithoutFormaPagoInput>
  }

  export type CreditoAsociadoUpdateWithWhereUniqueWithoutFormaPagoInput = {
    where: CreditoAsociadoWhereUniqueInput
    data: XOR<CreditoAsociadoUpdateWithoutFormaPagoInput, CreditoAsociadoUncheckedUpdateWithoutFormaPagoInput>
  }

  export type CreditoAsociadoUpdateManyWithWhereWithoutFormaPagoInput = {
    where: CreditoAsociadoScalarWhereInput
    data: XOR<CreditoAsociadoUpdateManyMutationInput, CreditoAsociadoUncheckedUpdateManyWithoutFormaPagoInput>
  }

  export type TipoDocumentoCreateWithoutClientesInput = {
    codigo: string
    descripcion: string
    activo?: boolean
    fechaRegistro?: Date | string
  }

  export type TipoDocumentoUncheckedCreateWithoutClientesInput = {
    id?: number
    codigo: string
    descripcion: string
    activo?: boolean
    fechaRegistro?: Date | string
  }

  export type TipoDocumentoCreateOrConnectWithoutClientesInput = {
    where: TipoDocumentoWhereUniqueInput
    create: XOR<TipoDocumentoCreateWithoutClientesInput, TipoDocumentoUncheckedCreateWithoutClientesInput>
  }

  export type TipoClienteCreateWithoutClientesInput = {
    codigo: string
    descripcion: string
    activo?: boolean
    fechaRegistro?: Date | string
  }

  export type TipoClienteUncheckedCreateWithoutClientesInput = {
    id?: number
    codigo: string
    descripcion: string
    activo?: boolean
    fechaRegistro?: Date | string
  }

  export type TipoClienteCreateOrConnectWithoutClientesInput = {
    where: TipoClienteWhereUniqueInput
    create: XOR<TipoClienteCreateWithoutClientesInput, TipoClienteUncheckedCreateWithoutClientesInput>
  }

  export type CreditoAsociadoCreateWithoutClienteInput = {
    numeroCredito: string
    identificacionAsociado: string
    nombreAsociado: string
    valorSolicitado: Decimal | DecimalJsLike | number | string
    tasaInteres: Decimal | DecimalJsLike | number | string
    numeroCuotas: number
    entidadId?: number
    activo?: boolean
    createdBy: string
    updatedBy?: string | null
    fechaSolicitud?: Date | string
    fechaActualizacion?: Date | string
    TipoCredito: TipoCreditoCreateNestedOneWithoutCreditosInput
    FormaPago: MetodoPagoCreateNestedOneWithoutCreditosInput
    Estado: EstadoCreditoCreateNestedOneWithoutCreditosInput
    Asesor?: AsesorCreateNestedOneWithoutCreditosInput
    historial?: HistorialCreditoCreateNestedManyWithoutCreditoInput
    webhookOutbox?: WebhookOutboxCreateNestedManyWithoutCreditoInput
  }

  export type CreditoAsociadoUncheckedCreateWithoutClienteInput = {
    id?: number
    numeroCredito: string
    identificacionAsociado: string
    nombreAsociado: string
    idTipoCredito: number
    idFormaPago: number
    idEstadoCredito: number
    idAsesor?: number | null
    valorSolicitado: Decimal | DecimalJsLike | number | string
    tasaInteres: Decimal | DecimalJsLike | number | string
    numeroCuotas: number
    entidadId?: number
    activo?: boolean
    createdBy: string
    updatedBy?: string | null
    fechaSolicitud?: Date | string
    fechaActualizacion?: Date | string
    historial?: HistorialCreditoUncheckedCreateNestedManyWithoutCreditoInput
    webhookOutbox?: WebhookOutboxUncheckedCreateNestedManyWithoutCreditoInput
  }

  export type CreditoAsociadoCreateOrConnectWithoutClienteInput = {
    where: CreditoAsociadoWhereUniqueInput
    create: XOR<CreditoAsociadoCreateWithoutClienteInput, CreditoAsociadoUncheckedCreateWithoutClienteInput>
  }

  export type CreditoAsociadoCreateManyClienteInputEnvelope = {
    data: CreditoAsociadoCreateManyClienteInput | CreditoAsociadoCreateManyClienteInput[]
  }

  export type TipoDocumentoUpsertWithoutClientesInput = {
    update: XOR<TipoDocumentoUpdateWithoutClientesInput, TipoDocumentoUncheckedUpdateWithoutClientesInput>
    create: XOR<TipoDocumentoCreateWithoutClientesInput, TipoDocumentoUncheckedCreateWithoutClientesInput>
    where?: TipoDocumentoWhereInput
  }

  export type TipoDocumentoUpdateToOneWithWhereWithoutClientesInput = {
    where?: TipoDocumentoWhereInput
    data: XOR<TipoDocumentoUpdateWithoutClientesInput, TipoDocumentoUncheckedUpdateWithoutClientesInput>
  }

  export type TipoDocumentoUpdateWithoutClientesInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoDocumentoUncheckedUpdateWithoutClientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoClienteUpsertWithoutClientesInput = {
    update: XOR<TipoClienteUpdateWithoutClientesInput, TipoClienteUncheckedUpdateWithoutClientesInput>
    create: XOR<TipoClienteCreateWithoutClientesInput, TipoClienteUncheckedCreateWithoutClientesInput>
    where?: TipoClienteWhereInput
  }

  export type TipoClienteUpdateToOneWithWhereWithoutClientesInput = {
    where?: TipoClienteWhereInput
    data: XOR<TipoClienteUpdateWithoutClientesInput, TipoClienteUncheckedUpdateWithoutClientesInput>
  }

  export type TipoClienteUpdateWithoutClientesInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoClienteUncheckedUpdateWithoutClientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditoAsociadoUpsertWithWhereUniqueWithoutClienteInput = {
    where: CreditoAsociadoWhereUniqueInput
    update: XOR<CreditoAsociadoUpdateWithoutClienteInput, CreditoAsociadoUncheckedUpdateWithoutClienteInput>
    create: XOR<CreditoAsociadoCreateWithoutClienteInput, CreditoAsociadoUncheckedCreateWithoutClienteInput>
  }

  export type CreditoAsociadoUpdateWithWhereUniqueWithoutClienteInput = {
    where: CreditoAsociadoWhereUniqueInput
    data: XOR<CreditoAsociadoUpdateWithoutClienteInput, CreditoAsociadoUncheckedUpdateWithoutClienteInput>
  }

  export type CreditoAsociadoUpdateManyWithWhereWithoutClienteInput = {
    where: CreditoAsociadoScalarWhereInput
    data: XOR<CreditoAsociadoUpdateManyMutationInput, CreditoAsociadoUncheckedUpdateManyWithoutClienteInput>
  }

  export type CreditoAsociadoCreateWithoutAsesorInput = {
    numeroCredito: string
    identificacionAsociado: string
    nombreAsociado: string
    valorSolicitado: Decimal | DecimalJsLike | number | string
    tasaInteres: Decimal | DecimalJsLike | number | string
    numeroCuotas: number
    entidadId?: number
    activo?: boolean
    createdBy: string
    updatedBy?: string | null
    fechaSolicitud?: Date | string
    fechaActualizacion?: Date | string
    Cliente: ClienteCreateNestedOneWithoutCreditosInput
    TipoCredito: TipoCreditoCreateNestedOneWithoutCreditosInput
    FormaPago: MetodoPagoCreateNestedOneWithoutCreditosInput
    Estado: EstadoCreditoCreateNestedOneWithoutCreditosInput
    historial?: HistorialCreditoCreateNestedManyWithoutCreditoInput
    webhookOutbox?: WebhookOutboxCreateNestedManyWithoutCreditoInput
  }

  export type CreditoAsociadoUncheckedCreateWithoutAsesorInput = {
    id?: number
    numeroCredito: string
    identificacionAsociado: string
    nombreAsociado: string
    idCliente: number
    idTipoCredito: number
    idFormaPago: number
    idEstadoCredito: number
    valorSolicitado: Decimal | DecimalJsLike | number | string
    tasaInteres: Decimal | DecimalJsLike | number | string
    numeroCuotas: number
    entidadId?: number
    activo?: boolean
    createdBy: string
    updatedBy?: string | null
    fechaSolicitud?: Date | string
    fechaActualizacion?: Date | string
    historial?: HistorialCreditoUncheckedCreateNestedManyWithoutCreditoInput
    webhookOutbox?: WebhookOutboxUncheckedCreateNestedManyWithoutCreditoInput
  }

  export type CreditoAsociadoCreateOrConnectWithoutAsesorInput = {
    where: CreditoAsociadoWhereUniqueInput
    create: XOR<CreditoAsociadoCreateWithoutAsesorInput, CreditoAsociadoUncheckedCreateWithoutAsesorInput>
  }

  export type CreditoAsociadoCreateManyAsesorInputEnvelope = {
    data: CreditoAsociadoCreateManyAsesorInput | CreditoAsociadoCreateManyAsesorInput[]
  }

  export type CreditoAsociadoUpsertWithWhereUniqueWithoutAsesorInput = {
    where: CreditoAsociadoWhereUniqueInput
    update: XOR<CreditoAsociadoUpdateWithoutAsesorInput, CreditoAsociadoUncheckedUpdateWithoutAsesorInput>
    create: XOR<CreditoAsociadoCreateWithoutAsesorInput, CreditoAsociadoUncheckedCreateWithoutAsesorInput>
  }

  export type CreditoAsociadoUpdateWithWhereUniqueWithoutAsesorInput = {
    where: CreditoAsociadoWhereUniqueInput
    data: XOR<CreditoAsociadoUpdateWithoutAsesorInput, CreditoAsociadoUncheckedUpdateWithoutAsesorInput>
  }

  export type CreditoAsociadoUpdateManyWithWhereWithoutAsesorInput = {
    where: CreditoAsociadoScalarWhereInput
    data: XOR<CreditoAsociadoUpdateManyMutationInput, CreditoAsociadoUncheckedUpdateManyWithoutAsesorInput>
  }

  export type ClienteCreateWithoutCreditosInput = {
    documento: string
    nombres: string
    apellidos: string
    activo?: boolean
    fechaRegistro?: Date | string
    TipoDocumento: TipoDocumentoCreateNestedOneWithoutClientesInput
    TipoCliente: TipoClienteCreateNestedOneWithoutClientesInput
  }

  export type ClienteUncheckedCreateWithoutCreditosInput = {
    id?: number
    documento: string
    nombres: string
    apellidos: string
    idTipoDocumento: number
    idTipoCliente: number
    activo?: boolean
    fechaRegistro?: Date | string
  }

  export type ClienteCreateOrConnectWithoutCreditosInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutCreditosInput, ClienteUncheckedCreateWithoutCreditosInput>
  }

  export type TipoCreditoCreateWithoutCreditosInput = {
    codigo: string
    descripcion: string
    activo?: boolean
    fechaRegistro?: Date | string
  }

  export type TipoCreditoUncheckedCreateWithoutCreditosInput = {
    id?: number
    codigo: string
    descripcion: string
    activo?: boolean
    fechaRegistro?: Date | string
  }

  export type TipoCreditoCreateOrConnectWithoutCreditosInput = {
    where: TipoCreditoWhereUniqueInput
    create: XOR<TipoCreditoCreateWithoutCreditosInput, TipoCreditoUncheckedCreateWithoutCreditosInput>
  }

  export type MetodoPagoCreateWithoutCreditosInput = {
    codigo: string
    descripcion: string
    activo?: boolean
    fechaRegistro?: Date | string
  }

  export type MetodoPagoUncheckedCreateWithoutCreditosInput = {
    id?: number
    codigo: string
    descripcion: string
    activo?: boolean
    fechaRegistro?: Date | string
  }

  export type MetodoPagoCreateOrConnectWithoutCreditosInput = {
    where: MetodoPagoWhereUniqueInput
    create: XOR<MetodoPagoCreateWithoutCreditosInput, MetodoPagoUncheckedCreateWithoutCreditosInput>
  }

  export type EstadoCreditoCreateWithoutCreditosInput = {
    codigo: string
    descripcion: string
    activo?: boolean
    fechaRegistro?: Date | string
    historialOrigen?: HistorialCreditoCreateNestedManyWithoutEstadoAnteriorInput
    historialDestino?: HistorialCreditoCreateNestedManyWithoutEstadoNuevoInput
  }

  export type EstadoCreditoUncheckedCreateWithoutCreditosInput = {
    id?: number
    codigo: string
    descripcion: string
    activo?: boolean
    fechaRegistro?: Date | string
    historialOrigen?: HistorialCreditoUncheckedCreateNestedManyWithoutEstadoAnteriorInput
    historialDestino?: HistorialCreditoUncheckedCreateNestedManyWithoutEstadoNuevoInput
  }

  export type EstadoCreditoCreateOrConnectWithoutCreditosInput = {
    where: EstadoCreditoWhereUniqueInput
    create: XOR<EstadoCreditoCreateWithoutCreditosInput, EstadoCreditoUncheckedCreateWithoutCreditosInput>
  }

  export type AsesorCreateWithoutCreditosInput = {
    documento: string
    nombre: string
    activo?: boolean
  }

  export type AsesorUncheckedCreateWithoutCreditosInput = {
    id?: number
    documento: string
    nombre: string
    activo?: boolean
  }

  export type AsesorCreateOrConnectWithoutCreditosInput = {
    where: AsesorWhereUniqueInput
    create: XOR<AsesorCreateWithoutCreditosInput, AsesorUncheckedCreateWithoutCreditosInput>
  }

  export type HistorialCreditoCreateWithoutCreditoInput = {
    tipoCambio: string
    estadoAnterior?: string | null
    estadoNuevo: string
    usuario: string
    observacion?: string | null
    camposModificados?: string | null
    fecha?: Date | string
    EstadoAnterior?: EstadoCreditoCreateNestedOneWithoutHistorialOrigenInput
    EstadoNuevo: EstadoCreditoCreateNestedOneWithoutHistorialDestinoInput
  }

  export type HistorialCreditoUncheckedCreateWithoutCreditoInput = {
    id?: number
    tipoCambio: string
    idEstadoAnterior?: number | null
    idEstadoNuevo: number
    estadoAnterior?: string | null
    estadoNuevo: string
    usuario: string
    observacion?: string | null
    camposModificados?: string | null
    fecha?: Date | string
  }

  export type HistorialCreditoCreateOrConnectWithoutCreditoInput = {
    where: HistorialCreditoWhereUniqueInput
    create: XOR<HistorialCreditoCreateWithoutCreditoInput, HistorialCreditoUncheckedCreateWithoutCreditoInput>
  }

  export type HistorialCreditoCreateManyCreditoInputEnvelope = {
    data: HistorialCreditoCreateManyCreditoInput | HistorialCreditoCreateManyCreditoInput[]
  }

  export type WebhookOutboxCreateWithoutCreditoInput = {
    eventId: string
    eventType: string
    entidadId?: number
    payload: string
    estado?: string
    intentos?: number
    ultimoError?: string | null
    proximoIntento?: Date | string
    fechaCreacion?: Date | string
    fechaEnvio?: Date | string | null
  }

  export type WebhookOutboxUncheckedCreateWithoutCreditoInput = {
    id?: number
    eventId: string
    eventType: string
    entidadId?: number
    payload: string
    estado?: string
    intentos?: number
    ultimoError?: string | null
    proximoIntento?: Date | string
    fechaCreacion?: Date | string
    fechaEnvio?: Date | string | null
  }

  export type WebhookOutboxCreateOrConnectWithoutCreditoInput = {
    where: WebhookOutboxWhereUniqueInput
    create: XOR<WebhookOutboxCreateWithoutCreditoInput, WebhookOutboxUncheckedCreateWithoutCreditoInput>
  }

  export type WebhookOutboxCreateManyCreditoInputEnvelope = {
    data: WebhookOutboxCreateManyCreditoInput | WebhookOutboxCreateManyCreditoInput[]
  }

  export type ClienteUpsertWithoutCreditosInput = {
    update: XOR<ClienteUpdateWithoutCreditosInput, ClienteUncheckedUpdateWithoutCreditosInput>
    create: XOR<ClienteCreateWithoutCreditosInput, ClienteUncheckedCreateWithoutCreditosInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutCreditosInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutCreditosInput, ClienteUncheckedUpdateWithoutCreditosInput>
  }

  export type ClienteUpdateWithoutCreditosInput = {
    documento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    TipoDocumento?: TipoDocumentoUpdateOneRequiredWithoutClientesNestedInput
    TipoCliente?: TipoClienteUpdateOneRequiredWithoutClientesNestedInput
  }

  export type ClienteUncheckedUpdateWithoutCreditosInput = {
    id?: IntFieldUpdateOperationsInput | number
    documento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    idTipoDocumento?: IntFieldUpdateOperationsInput | number
    idTipoCliente?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoCreditoUpsertWithoutCreditosInput = {
    update: XOR<TipoCreditoUpdateWithoutCreditosInput, TipoCreditoUncheckedUpdateWithoutCreditosInput>
    create: XOR<TipoCreditoCreateWithoutCreditosInput, TipoCreditoUncheckedCreateWithoutCreditosInput>
    where?: TipoCreditoWhereInput
  }

  export type TipoCreditoUpdateToOneWithWhereWithoutCreditosInput = {
    where?: TipoCreditoWhereInput
    data: XOR<TipoCreditoUpdateWithoutCreditosInput, TipoCreditoUncheckedUpdateWithoutCreditosInput>
  }

  export type TipoCreditoUpdateWithoutCreditosInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoCreditoUncheckedUpdateWithoutCreditosInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetodoPagoUpsertWithoutCreditosInput = {
    update: XOR<MetodoPagoUpdateWithoutCreditosInput, MetodoPagoUncheckedUpdateWithoutCreditosInput>
    create: XOR<MetodoPagoCreateWithoutCreditosInput, MetodoPagoUncheckedCreateWithoutCreditosInput>
    where?: MetodoPagoWhereInput
  }

  export type MetodoPagoUpdateToOneWithWhereWithoutCreditosInput = {
    where?: MetodoPagoWhereInput
    data: XOR<MetodoPagoUpdateWithoutCreditosInput, MetodoPagoUncheckedUpdateWithoutCreditosInput>
  }

  export type MetodoPagoUpdateWithoutCreditosInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetodoPagoUncheckedUpdateWithoutCreditosInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstadoCreditoUpsertWithoutCreditosInput = {
    update: XOR<EstadoCreditoUpdateWithoutCreditosInput, EstadoCreditoUncheckedUpdateWithoutCreditosInput>
    create: XOR<EstadoCreditoCreateWithoutCreditosInput, EstadoCreditoUncheckedCreateWithoutCreditosInput>
    where?: EstadoCreditoWhereInput
  }

  export type EstadoCreditoUpdateToOneWithWhereWithoutCreditosInput = {
    where?: EstadoCreditoWhereInput
    data: XOR<EstadoCreditoUpdateWithoutCreditosInput, EstadoCreditoUncheckedUpdateWithoutCreditosInput>
  }

  export type EstadoCreditoUpdateWithoutCreditosInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    historialOrigen?: HistorialCreditoUpdateManyWithoutEstadoAnteriorNestedInput
    historialDestino?: HistorialCreditoUpdateManyWithoutEstadoNuevoNestedInput
  }

  export type EstadoCreditoUncheckedUpdateWithoutCreditosInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    historialOrigen?: HistorialCreditoUncheckedUpdateManyWithoutEstadoAnteriorNestedInput
    historialDestino?: HistorialCreditoUncheckedUpdateManyWithoutEstadoNuevoNestedInput
  }

  export type AsesorUpsertWithoutCreditosInput = {
    update: XOR<AsesorUpdateWithoutCreditosInput, AsesorUncheckedUpdateWithoutCreditosInput>
    create: XOR<AsesorCreateWithoutCreditosInput, AsesorUncheckedCreateWithoutCreditosInput>
    where?: AsesorWhereInput
  }

  export type AsesorUpdateToOneWithWhereWithoutCreditosInput = {
    where?: AsesorWhereInput
    data: XOR<AsesorUpdateWithoutCreditosInput, AsesorUncheckedUpdateWithoutCreditosInput>
  }

  export type AsesorUpdateWithoutCreditosInput = {
    documento?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AsesorUncheckedUpdateWithoutCreditosInput = {
    id?: IntFieldUpdateOperationsInput | number
    documento?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HistorialCreditoUpsertWithWhereUniqueWithoutCreditoInput = {
    where: HistorialCreditoWhereUniqueInput
    update: XOR<HistorialCreditoUpdateWithoutCreditoInput, HistorialCreditoUncheckedUpdateWithoutCreditoInput>
    create: XOR<HistorialCreditoCreateWithoutCreditoInput, HistorialCreditoUncheckedCreateWithoutCreditoInput>
  }

  export type HistorialCreditoUpdateWithWhereUniqueWithoutCreditoInput = {
    where: HistorialCreditoWhereUniqueInput
    data: XOR<HistorialCreditoUpdateWithoutCreditoInput, HistorialCreditoUncheckedUpdateWithoutCreditoInput>
  }

  export type HistorialCreditoUpdateManyWithWhereWithoutCreditoInput = {
    where: HistorialCreditoScalarWhereInput
    data: XOR<HistorialCreditoUpdateManyMutationInput, HistorialCreditoUncheckedUpdateManyWithoutCreditoInput>
  }

  export type WebhookOutboxUpsertWithWhereUniqueWithoutCreditoInput = {
    where: WebhookOutboxWhereUniqueInput
    update: XOR<WebhookOutboxUpdateWithoutCreditoInput, WebhookOutboxUncheckedUpdateWithoutCreditoInput>
    create: XOR<WebhookOutboxCreateWithoutCreditoInput, WebhookOutboxUncheckedCreateWithoutCreditoInput>
  }

  export type WebhookOutboxUpdateWithWhereUniqueWithoutCreditoInput = {
    where: WebhookOutboxWhereUniqueInput
    data: XOR<WebhookOutboxUpdateWithoutCreditoInput, WebhookOutboxUncheckedUpdateWithoutCreditoInput>
  }

  export type WebhookOutboxUpdateManyWithWhereWithoutCreditoInput = {
    where: WebhookOutboxScalarWhereInput
    data: XOR<WebhookOutboxUpdateManyMutationInput, WebhookOutboxUncheckedUpdateManyWithoutCreditoInput>
  }

  export type WebhookOutboxScalarWhereInput = {
    AND?: WebhookOutboxScalarWhereInput | WebhookOutboxScalarWhereInput[]
    OR?: WebhookOutboxScalarWhereInput[]
    NOT?: WebhookOutboxScalarWhereInput | WebhookOutboxScalarWhereInput[]
    id?: IntFilter<"WebhookOutbox"> | number
    eventId?: StringFilter<"WebhookOutbox"> | string
    eventType?: StringFilter<"WebhookOutbox"> | string
    idCredito?: IntFilter<"WebhookOutbox"> | number
    entidadId?: IntFilter<"WebhookOutbox"> | number
    payload?: StringFilter<"WebhookOutbox"> | string
    estado?: StringFilter<"WebhookOutbox"> | string
    intentos?: IntFilter<"WebhookOutbox"> | number
    ultimoError?: StringNullableFilter<"WebhookOutbox"> | string | null
    proximoIntento?: DateTimeFilter<"WebhookOutbox"> | Date | string
    fechaCreacion?: DateTimeFilter<"WebhookOutbox"> | Date | string
    fechaEnvio?: DateTimeNullableFilter<"WebhookOutbox"> | Date | string | null
  }

  export type CreditoAsociadoCreateWithoutHistorialInput = {
    numeroCredito: string
    identificacionAsociado: string
    nombreAsociado: string
    valorSolicitado: Decimal | DecimalJsLike | number | string
    tasaInteres: Decimal | DecimalJsLike | number | string
    numeroCuotas: number
    entidadId?: number
    activo?: boolean
    createdBy: string
    updatedBy?: string | null
    fechaSolicitud?: Date | string
    fechaActualizacion?: Date | string
    Cliente: ClienteCreateNestedOneWithoutCreditosInput
    TipoCredito: TipoCreditoCreateNestedOneWithoutCreditosInput
    FormaPago: MetodoPagoCreateNestedOneWithoutCreditosInput
    Estado: EstadoCreditoCreateNestedOneWithoutCreditosInput
    Asesor?: AsesorCreateNestedOneWithoutCreditosInput
    webhookOutbox?: WebhookOutboxCreateNestedManyWithoutCreditoInput
  }

  export type CreditoAsociadoUncheckedCreateWithoutHistorialInput = {
    id?: number
    numeroCredito: string
    identificacionAsociado: string
    nombreAsociado: string
    idCliente: number
    idTipoCredito: number
    idFormaPago: number
    idEstadoCredito: number
    idAsesor?: number | null
    valorSolicitado: Decimal | DecimalJsLike | number | string
    tasaInteres: Decimal | DecimalJsLike | number | string
    numeroCuotas: number
    entidadId?: number
    activo?: boolean
    createdBy: string
    updatedBy?: string | null
    fechaSolicitud?: Date | string
    fechaActualizacion?: Date | string
    webhookOutbox?: WebhookOutboxUncheckedCreateNestedManyWithoutCreditoInput
  }

  export type CreditoAsociadoCreateOrConnectWithoutHistorialInput = {
    where: CreditoAsociadoWhereUniqueInput
    create: XOR<CreditoAsociadoCreateWithoutHistorialInput, CreditoAsociadoUncheckedCreateWithoutHistorialInput>
  }

  export type EstadoCreditoCreateWithoutHistorialOrigenInput = {
    codigo: string
    descripcion: string
    activo?: boolean
    fechaRegistro?: Date | string
    creditos?: CreditoAsociadoCreateNestedManyWithoutEstadoInput
    historialDestino?: HistorialCreditoCreateNestedManyWithoutEstadoNuevoInput
  }

  export type EstadoCreditoUncheckedCreateWithoutHistorialOrigenInput = {
    id?: number
    codigo: string
    descripcion: string
    activo?: boolean
    fechaRegistro?: Date | string
    creditos?: CreditoAsociadoUncheckedCreateNestedManyWithoutEstadoInput
    historialDestino?: HistorialCreditoUncheckedCreateNestedManyWithoutEstadoNuevoInput
  }

  export type EstadoCreditoCreateOrConnectWithoutHistorialOrigenInput = {
    where: EstadoCreditoWhereUniqueInput
    create: XOR<EstadoCreditoCreateWithoutHistorialOrigenInput, EstadoCreditoUncheckedCreateWithoutHistorialOrigenInput>
  }

  export type EstadoCreditoCreateWithoutHistorialDestinoInput = {
    codigo: string
    descripcion: string
    activo?: boolean
    fechaRegistro?: Date | string
    creditos?: CreditoAsociadoCreateNestedManyWithoutEstadoInput
    historialOrigen?: HistorialCreditoCreateNestedManyWithoutEstadoAnteriorInput
  }

  export type EstadoCreditoUncheckedCreateWithoutHistorialDestinoInput = {
    id?: number
    codigo: string
    descripcion: string
    activo?: boolean
    fechaRegistro?: Date | string
    creditos?: CreditoAsociadoUncheckedCreateNestedManyWithoutEstadoInput
    historialOrigen?: HistorialCreditoUncheckedCreateNestedManyWithoutEstadoAnteriorInput
  }

  export type EstadoCreditoCreateOrConnectWithoutHistorialDestinoInput = {
    where: EstadoCreditoWhereUniqueInput
    create: XOR<EstadoCreditoCreateWithoutHistorialDestinoInput, EstadoCreditoUncheckedCreateWithoutHistorialDestinoInput>
  }

  export type CreditoAsociadoUpsertWithoutHistorialInput = {
    update: XOR<CreditoAsociadoUpdateWithoutHistorialInput, CreditoAsociadoUncheckedUpdateWithoutHistorialInput>
    create: XOR<CreditoAsociadoCreateWithoutHistorialInput, CreditoAsociadoUncheckedCreateWithoutHistorialInput>
    where?: CreditoAsociadoWhereInput
  }

  export type CreditoAsociadoUpdateToOneWithWhereWithoutHistorialInput = {
    where?: CreditoAsociadoWhereInput
    data: XOR<CreditoAsociadoUpdateWithoutHistorialInput, CreditoAsociadoUncheckedUpdateWithoutHistorialInput>
  }

  export type CreditoAsociadoUpdateWithoutHistorialInput = {
    numeroCredito?: StringFieldUpdateOperationsInput | string
    identificacionAsociado?: StringFieldUpdateOperationsInput | string
    nombreAsociado?: StringFieldUpdateOperationsInput | string
    valorSolicitado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tasaInteres?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    numeroCuotas?: IntFieldUpdateOperationsInput | number
    entidadId?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    fechaSolicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    Cliente?: ClienteUpdateOneRequiredWithoutCreditosNestedInput
    TipoCredito?: TipoCreditoUpdateOneRequiredWithoutCreditosNestedInput
    FormaPago?: MetodoPagoUpdateOneRequiredWithoutCreditosNestedInput
    Estado?: EstadoCreditoUpdateOneRequiredWithoutCreditosNestedInput
    Asesor?: AsesorUpdateOneWithoutCreditosNestedInput
    webhookOutbox?: WebhookOutboxUpdateManyWithoutCreditoNestedInput
  }

  export type CreditoAsociadoUncheckedUpdateWithoutHistorialInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroCredito?: StringFieldUpdateOperationsInput | string
    identificacionAsociado?: StringFieldUpdateOperationsInput | string
    nombreAsociado?: StringFieldUpdateOperationsInput | string
    idCliente?: IntFieldUpdateOperationsInput | number
    idTipoCredito?: IntFieldUpdateOperationsInput | number
    idFormaPago?: IntFieldUpdateOperationsInput | number
    idEstadoCredito?: IntFieldUpdateOperationsInput | number
    idAsesor?: NullableIntFieldUpdateOperationsInput | number | null
    valorSolicitado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tasaInteres?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    numeroCuotas?: IntFieldUpdateOperationsInput | number
    entidadId?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    fechaSolicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    webhookOutbox?: WebhookOutboxUncheckedUpdateManyWithoutCreditoNestedInput
  }

  export type EstadoCreditoUpsertWithoutHistorialOrigenInput = {
    update: XOR<EstadoCreditoUpdateWithoutHistorialOrigenInput, EstadoCreditoUncheckedUpdateWithoutHistorialOrigenInput>
    create: XOR<EstadoCreditoCreateWithoutHistorialOrigenInput, EstadoCreditoUncheckedCreateWithoutHistorialOrigenInput>
    where?: EstadoCreditoWhereInput
  }

  export type EstadoCreditoUpdateToOneWithWhereWithoutHistorialOrigenInput = {
    where?: EstadoCreditoWhereInput
    data: XOR<EstadoCreditoUpdateWithoutHistorialOrigenInput, EstadoCreditoUncheckedUpdateWithoutHistorialOrigenInput>
  }

  export type EstadoCreditoUpdateWithoutHistorialOrigenInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    creditos?: CreditoAsociadoUpdateManyWithoutEstadoNestedInput
    historialDestino?: HistorialCreditoUpdateManyWithoutEstadoNuevoNestedInput
  }

  export type EstadoCreditoUncheckedUpdateWithoutHistorialOrigenInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    creditos?: CreditoAsociadoUncheckedUpdateManyWithoutEstadoNestedInput
    historialDestino?: HistorialCreditoUncheckedUpdateManyWithoutEstadoNuevoNestedInput
  }

  export type EstadoCreditoUpsertWithoutHistorialDestinoInput = {
    update: XOR<EstadoCreditoUpdateWithoutHistorialDestinoInput, EstadoCreditoUncheckedUpdateWithoutHistorialDestinoInput>
    create: XOR<EstadoCreditoCreateWithoutHistorialDestinoInput, EstadoCreditoUncheckedCreateWithoutHistorialDestinoInput>
    where?: EstadoCreditoWhereInput
  }

  export type EstadoCreditoUpdateToOneWithWhereWithoutHistorialDestinoInput = {
    where?: EstadoCreditoWhereInput
    data: XOR<EstadoCreditoUpdateWithoutHistorialDestinoInput, EstadoCreditoUncheckedUpdateWithoutHistorialDestinoInput>
  }

  export type EstadoCreditoUpdateWithoutHistorialDestinoInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    creditos?: CreditoAsociadoUpdateManyWithoutEstadoNestedInput
    historialOrigen?: HistorialCreditoUpdateManyWithoutEstadoAnteriorNestedInput
  }

  export type EstadoCreditoUncheckedUpdateWithoutHistorialDestinoInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    creditos?: CreditoAsociadoUncheckedUpdateManyWithoutEstadoNestedInput
    historialOrigen?: HistorialCreditoUncheckedUpdateManyWithoutEstadoAnteriorNestedInput
  }

  export type CreditoAsociadoCreateWithoutWebhookOutboxInput = {
    numeroCredito: string
    identificacionAsociado: string
    nombreAsociado: string
    valorSolicitado: Decimal | DecimalJsLike | number | string
    tasaInteres: Decimal | DecimalJsLike | number | string
    numeroCuotas: number
    entidadId?: number
    activo?: boolean
    createdBy: string
    updatedBy?: string | null
    fechaSolicitud?: Date | string
    fechaActualizacion?: Date | string
    Cliente: ClienteCreateNestedOneWithoutCreditosInput
    TipoCredito: TipoCreditoCreateNestedOneWithoutCreditosInput
    FormaPago: MetodoPagoCreateNestedOneWithoutCreditosInput
    Estado: EstadoCreditoCreateNestedOneWithoutCreditosInput
    Asesor?: AsesorCreateNestedOneWithoutCreditosInput
    historial?: HistorialCreditoCreateNestedManyWithoutCreditoInput
  }

  export type CreditoAsociadoUncheckedCreateWithoutWebhookOutboxInput = {
    id?: number
    numeroCredito: string
    identificacionAsociado: string
    nombreAsociado: string
    idCliente: number
    idTipoCredito: number
    idFormaPago: number
    idEstadoCredito: number
    idAsesor?: number | null
    valorSolicitado: Decimal | DecimalJsLike | number | string
    tasaInteres: Decimal | DecimalJsLike | number | string
    numeroCuotas: number
    entidadId?: number
    activo?: boolean
    createdBy: string
    updatedBy?: string | null
    fechaSolicitud?: Date | string
    fechaActualizacion?: Date | string
    historial?: HistorialCreditoUncheckedCreateNestedManyWithoutCreditoInput
  }

  export type CreditoAsociadoCreateOrConnectWithoutWebhookOutboxInput = {
    where: CreditoAsociadoWhereUniqueInput
    create: XOR<CreditoAsociadoCreateWithoutWebhookOutboxInput, CreditoAsociadoUncheckedCreateWithoutWebhookOutboxInput>
  }

  export type CreditoAsociadoUpsertWithoutWebhookOutboxInput = {
    update: XOR<CreditoAsociadoUpdateWithoutWebhookOutboxInput, CreditoAsociadoUncheckedUpdateWithoutWebhookOutboxInput>
    create: XOR<CreditoAsociadoCreateWithoutWebhookOutboxInput, CreditoAsociadoUncheckedCreateWithoutWebhookOutboxInput>
    where?: CreditoAsociadoWhereInput
  }

  export type CreditoAsociadoUpdateToOneWithWhereWithoutWebhookOutboxInput = {
    where?: CreditoAsociadoWhereInput
    data: XOR<CreditoAsociadoUpdateWithoutWebhookOutboxInput, CreditoAsociadoUncheckedUpdateWithoutWebhookOutboxInput>
  }

  export type CreditoAsociadoUpdateWithoutWebhookOutboxInput = {
    numeroCredito?: StringFieldUpdateOperationsInput | string
    identificacionAsociado?: StringFieldUpdateOperationsInput | string
    nombreAsociado?: StringFieldUpdateOperationsInput | string
    valorSolicitado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tasaInteres?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    numeroCuotas?: IntFieldUpdateOperationsInput | number
    entidadId?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    fechaSolicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    Cliente?: ClienteUpdateOneRequiredWithoutCreditosNestedInput
    TipoCredito?: TipoCreditoUpdateOneRequiredWithoutCreditosNestedInput
    FormaPago?: MetodoPagoUpdateOneRequiredWithoutCreditosNestedInput
    Estado?: EstadoCreditoUpdateOneRequiredWithoutCreditosNestedInput
    Asesor?: AsesorUpdateOneWithoutCreditosNestedInput
    historial?: HistorialCreditoUpdateManyWithoutCreditoNestedInput
  }

  export type CreditoAsociadoUncheckedUpdateWithoutWebhookOutboxInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroCredito?: StringFieldUpdateOperationsInput | string
    identificacionAsociado?: StringFieldUpdateOperationsInput | string
    nombreAsociado?: StringFieldUpdateOperationsInput | string
    idCliente?: IntFieldUpdateOperationsInput | number
    idTipoCredito?: IntFieldUpdateOperationsInput | number
    idFormaPago?: IntFieldUpdateOperationsInput | number
    idEstadoCredito?: IntFieldUpdateOperationsInput | number
    idAsesor?: NullableIntFieldUpdateOperationsInput | number | null
    valorSolicitado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tasaInteres?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    numeroCuotas?: IntFieldUpdateOperationsInput | number
    entidadId?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    fechaSolicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    historial?: HistorialCreditoUncheckedUpdateManyWithoutCreditoNestedInput
  }

  export type ClienteCreateManyTipoClienteInput = {
    documento: string
    nombres: string
    apellidos: string
    idTipoDocumento: number
    activo?: boolean
    fechaRegistro?: Date | string
  }

  export type ClienteUpdateWithoutTipoClienteInput = {
    documento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    TipoDocumento?: TipoDocumentoUpdateOneRequiredWithoutClientesNestedInput
    creditos?: CreditoAsociadoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutTipoClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    documento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    idTipoDocumento?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    creditos?: CreditoAsociadoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateManyWithoutTipoClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    documento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    idTipoDocumento?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteCreateManyTipoDocumentoInput = {
    documento: string
    nombres: string
    apellidos: string
    idTipoCliente: number
    activo?: boolean
    fechaRegistro?: Date | string
  }

  export type ClienteUpdateWithoutTipoDocumentoInput = {
    documento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    TipoCliente?: TipoClienteUpdateOneRequiredWithoutClientesNestedInput
    creditos?: CreditoAsociadoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutTipoDocumentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    documento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    idTipoCliente?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
    creditos?: CreditoAsociadoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateManyWithoutTipoDocumentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    documento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    idTipoCliente?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    fechaRegistro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditoAsociadoCreateManyTipoCreditoInput = {
    numeroCredito: string
    identificacionAsociado: string
    nombreAsociado: string
    idCliente: number
    idFormaPago: number
    idEstadoCredito: number
    idAsesor?: number | null
    valorSolicitado: Decimal | DecimalJsLike | number | string
    tasaInteres: Decimal | DecimalJsLike | number | string
    numeroCuotas: number
    entidadId?: number
    activo?: boolean
    createdBy: string
    updatedBy?: string | null
    fechaSolicitud?: Date | string
    fechaActualizacion?: Date | string
  }

  export type CreditoAsociadoUpdateWithoutTipoCreditoInput = {
    numeroCredito?: StringFieldUpdateOperationsInput | string
    identificacionAsociado?: StringFieldUpdateOperationsInput | string
    nombreAsociado?: StringFieldUpdateOperationsInput | string
    valorSolicitado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tasaInteres?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    numeroCuotas?: IntFieldUpdateOperationsInput | number
    entidadId?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    fechaSolicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    Cliente?: ClienteUpdateOneRequiredWithoutCreditosNestedInput
    FormaPago?: MetodoPagoUpdateOneRequiredWithoutCreditosNestedInput
    Estado?: EstadoCreditoUpdateOneRequiredWithoutCreditosNestedInput
    Asesor?: AsesorUpdateOneWithoutCreditosNestedInput
    historial?: HistorialCreditoUpdateManyWithoutCreditoNestedInput
    webhookOutbox?: WebhookOutboxUpdateManyWithoutCreditoNestedInput
  }

  export type CreditoAsociadoUncheckedUpdateWithoutTipoCreditoInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroCredito?: StringFieldUpdateOperationsInput | string
    identificacionAsociado?: StringFieldUpdateOperationsInput | string
    nombreAsociado?: StringFieldUpdateOperationsInput | string
    idCliente?: IntFieldUpdateOperationsInput | number
    idFormaPago?: IntFieldUpdateOperationsInput | number
    idEstadoCredito?: IntFieldUpdateOperationsInput | number
    idAsesor?: NullableIntFieldUpdateOperationsInput | number | null
    valorSolicitado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tasaInteres?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    numeroCuotas?: IntFieldUpdateOperationsInput | number
    entidadId?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    fechaSolicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    historial?: HistorialCreditoUncheckedUpdateManyWithoutCreditoNestedInput
    webhookOutbox?: WebhookOutboxUncheckedUpdateManyWithoutCreditoNestedInput
  }

  export type CreditoAsociadoUncheckedUpdateManyWithoutTipoCreditoInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroCredito?: StringFieldUpdateOperationsInput | string
    identificacionAsociado?: StringFieldUpdateOperationsInput | string
    nombreAsociado?: StringFieldUpdateOperationsInput | string
    idCliente?: IntFieldUpdateOperationsInput | number
    idFormaPago?: IntFieldUpdateOperationsInput | number
    idEstadoCredito?: IntFieldUpdateOperationsInput | number
    idAsesor?: NullableIntFieldUpdateOperationsInput | number | null
    valorSolicitado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tasaInteres?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    numeroCuotas?: IntFieldUpdateOperationsInput | number
    entidadId?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    fechaSolicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditoAsociadoCreateManyEstadoInput = {
    numeroCredito: string
    identificacionAsociado: string
    nombreAsociado: string
    idCliente: number
    idTipoCredito: number
    idFormaPago: number
    idAsesor?: number | null
    valorSolicitado: Decimal | DecimalJsLike | number | string
    tasaInteres: Decimal | DecimalJsLike | number | string
    numeroCuotas: number
    entidadId?: number
    activo?: boolean
    createdBy: string
    updatedBy?: string | null
    fechaSolicitud?: Date | string
    fechaActualizacion?: Date | string
  }

  export type HistorialCreditoCreateManyEstadoAnteriorInput = {
    idCredito: number
    tipoCambio: string
    idEstadoNuevo: number
    estadoAnterior?: string | null
    estadoNuevo: string
    usuario: string
    observacion?: string | null
    camposModificados?: string | null
    fecha?: Date | string
  }

  export type HistorialCreditoCreateManyEstadoNuevoInput = {
    idCredito: number
    tipoCambio: string
    idEstadoAnterior?: number | null
    estadoAnterior?: string | null
    estadoNuevo: string
    usuario: string
    observacion?: string | null
    camposModificados?: string | null
    fecha?: Date | string
  }

  export type CreditoAsociadoUpdateWithoutEstadoInput = {
    numeroCredito?: StringFieldUpdateOperationsInput | string
    identificacionAsociado?: StringFieldUpdateOperationsInput | string
    nombreAsociado?: StringFieldUpdateOperationsInput | string
    valorSolicitado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tasaInteres?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    numeroCuotas?: IntFieldUpdateOperationsInput | number
    entidadId?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    fechaSolicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    Cliente?: ClienteUpdateOneRequiredWithoutCreditosNestedInput
    TipoCredito?: TipoCreditoUpdateOneRequiredWithoutCreditosNestedInput
    FormaPago?: MetodoPagoUpdateOneRequiredWithoutCreditosNestedInput
    Asesor?: AsesorUpdateOneWithoutCreditosNestedInput
    historial?: HistorialCreditoUpdateManyWithoutCreditoNestedInput
    webhookOutbox?: WebhookOutboxUpdateManyWithoutCreditoNestedInput
  }

  export type CreditoAsociadoUncheckedUpdateWithoutEstadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroCredito?: StringFieldUpdateOperationsInput | string
    identificacionAsociado?: StringFieldUpdateOperationsInput | string
    nombreAsociado?: StringFieldUpdateOperationsInput | string
    idCliente?: IntFieldUpdateOperationsInput | number
    idTipoCredito?: IntFieldUpdateOperationsInput | number
    idFormaPago?: IntFieldUpdateOperationsInput | number
    idAsesor?: NullableIntFieldUpdateOperationsInput | number | null
    valorSolicitado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tasaInteres?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    numeroCuotas?: IntFieldUpdateOperationsInput | number
    entidadId?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    fechaSolicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    historial?: HistorialCreditoUncheckedUpdateManyWithoutCreditoNestedInput
    webhookOutbox?: WebhookOutboxUncheckedUpdateManyWithoutCreditoNestedInput
  }

  export type CreditoAsociadoUncheckedUpdateManyWithoutEstadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroCredito?: StringFieldUpdateOperationsInput | string
    identificacionAsociado?: StringFieldUpdateOperationsInput | string
    nombreAsociado?: StringFieldUpdateOperationsInput | string
    idCliente?: IntFieldUpdateOperationsInput | number
    idTipoCredito?: IntFieldUpdateOperationsInput | number
    idFormaPago?: IntFieldUpdateOperationsInput | number
    idAsesor?: NullableIntFieldUpdateOperationsInput | number | null
    valorSolicitado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tasaInteres?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    numeroCuotas?: IntFieldUpdateOperationsInput | number
    entidadId?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    fechaSolicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistorialCreditoUpdateWithoutEstadoAnteriorInput = {
    tipoCambio?: StringFieldUpdateOperationsInput | string
    estadoAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    estadoNuevo?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    camposModificados?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Credito?: CreditoAsociadoUpdateOneRequiredWithoutHistorialNestedInput
    EstadoNuevo?: EstadoCreditoUpdateOneRequiredWithoutHistorialDestinoNestedInput
  }

  export type HistorialCreditoUncheckedUpdateWithoutEstadoAnteriorInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCredito?: IntFieldUpdateOperationsInput | number
    tipoCambio?: StringFieldUpdateOperationsInput | string
    idEstadoNuevo?: IntFieldUpdateOperationsInput | number
    estadoAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    estadoNuevo?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    camposModificados?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistorialCreditoUncheckedUpdateManyWithoutEstadoAnteriorInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCredito?: IntFieldUpdateOperationsInput | number
    tipoCambio?: StringFieldUpdateOperationsInput | string
    idEstadoNuevo?: IntFieldUpdateOperationsInput | number
    estadoAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    estadoNuevo?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    camposModificados?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistorialCreditoUpdateWithoutEstadoNuevoInput = {
    tipoCambio?: StringFieldUpdateOperationsInput | string
    estadoAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    estadoNuevo?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    camposModificados?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Credito?: CreditoAsociadoUpdateOneRequiredWithoutHistorialNestedInput
    EstadoAnterior?: EstadoCreditoUpdateOneWithoutHistorialOrigenNestedInput
  }

  export type HistorialCreditoUncheckedUpdateWithoutEstadoNuevoInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCredito?: IntFieldUpdateOperationsInput | number
    tipoCambio?: StringFieldUpdateOperationsInput | string
    idEstadoAnterior?: NullableIntFieldUpdateOperationsInput | number | null
    estadoAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    estadoNuevo?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    camposModificados?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistorialCreditoUncheckedUpdateManyWithoutEstadoNuevoInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCredito?: IntFieldUpdateOperationsInput | number
    tipoCambio?: StringFieldUpdateOperationsInput | string
    idEstadoAnterior?: NullableIntFieldUpdateOperationsInput | number | null
    estadoAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    estadoNuevo?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    camposModificados?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditoAsociadoCreateManyFormaPagoInput = {
    numeroCredito: string
    identificacionAsociado: string
    nombreAsociado: string
    idCliente: number
    idTipoCredito: number
    idEstadoCredito: number
    idAsesor?: number | null
    valorSolicitado: Decimal | DecimalJsLike | number | string
    tasaInteres: Decimal | DecimalJsLike | number | string
    numeroCuotas: number
    entidadId?: number
    activo?: boolean
    createdBy: string
    updatedBy?: string | null
    fechaSolicitud?: Date | string
    fechaActualizacion?: Date | string
  }

  export type CreditoAsociadoUpdateWithoutFormaPagoInput = {
    numeroCredito?: StringFieldUpdateOperationsInput | string
    identificacionAsociado?: StringFieldUpdateOperationsInput | string
    nombreAsociado?: StringFieldUpdateOperationsInput | string
    valorSolicitado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tasaInteres?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    numeroCuotas?: IntFieldUpdateOperationsInput | number
    entidadId?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    fechaSolicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    Cliente?: ClienteUpdateOneRequiredWithoutCreditosNestedInput
    TipoCredito?: TipoCreditoUpdateOneRequiredWithoutCreditosNestedInput
    Estado?: EstadoCreditoUpdateOneRequiredWithoutCreditosNestedInput
    Asesor?: AsesorUpdateOneWithoutCreditosNestedInput
    historial?: HistorialCreditoUpdateManyWithoutCreditoNestedInput
    webhookOutbox?: WebhookOutboxUpdateManyWithoutCreditoNestedInput
  }

  export type CreditoAsociadoUncheckedUpdateWithoutFormaPagoInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroCredito?: StringFieldUpdateOperationsInput | string
    identificacionAsociado?: StringFieldUpdateOperationsInput | string
    nombreAsociado?: StringFieldUpdateOperationsInput | string
    idCliente?: IntFieldUpdateOperationsInput | number
    idTipoCredito?: IntFieldUpdateOperationsInput | number
    idEstadoCredito?: IntFieldUpdateOperationsInput | number
    idAsesor?: NullableIntFieldUpdateOperationsInput | number | null
    valorSolicitado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tasaInteres?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    numeroCuotas?: IntFieldUpdateOperationsInput | number
    entidadId?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    fechaSolicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    historial?: HistorialCreditoUncheckedUpdateManyWithoutCreditoNestedInput
    webhookOutbox?: WebhookOutboxUncheckedUpdateManyWithoutCreditoNestedInput
  }

  export type CreditoAsociadoUncheckedUpdateManyWithoutFormaPagoInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroCredito?: StringFieldUpdateOperationsInput | string
    identificacionAsociado?: StringFieldUpdateOperationsInput | string
    nombreAsociado?: StringFieldUpdateOperationsInput | string
    idCliente?: IntFieldUpdateOperationsInput | number
    idTipoCredito?: IntFieldUpdateOperationsInput | number
    idEstadoCredito?: IntFieldUpdateOperationsInput | number
    idAsesor?: NullableIntFieldUpdateOperationsInput | number | null
    valorSolicitado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tasaInteres?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    numeroCuotas?: IntFieldUpdateOperationsInput | number
    entidadId?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    fechaSolicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditoAsociadoCreateManyClienteInput = {
    numeroCredito: string
    identificacionAsociado: string
    nombreAsociado: string
    idTipoCredito: number
    idFormaPago: number
    idEstadoCredito: number
    idAsesor?: number | null
    valorSolicitado: Decimal | DecimalJsLike | number | string
    tasaInteres: Decimal | DecimalJsLike | number | string
    numeroCuotas: number
    entidadId?: number
    activo?: boolean
    createdBy: string
    updatedBy?: string | null
    fechaSolicitud?: Date | string
    fechaActualizacion?: Date | string
  }

  export type CreditoAsociadoUpdateWithoutClienteInput = {
    numeroCredito?: StringFieldUpdateOperationsInput | string
    identificacionAsociado?: StringFieldUpdateOperationsInput | string
    nombreAsociado?: StringFieldUpdateOperationsInput | string
    valorSolicitado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tasaInteres?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    numeroCuotas?: IntFieldUpdateOperationsInput | number
    entidadId?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    fechaSolicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    TipoCredito?: TipoCreditoUpdateOneRequiredWithoutCreditosNestedInput
    FormaPago?: MetodoPagoUpdateOneRequiredWithoutCreditosNestedInput
    Estado?: EstadoCreditoUpdateOneRequiredWithoutCreditosNestedInput
    Asesor?: AsesorUpdateOneWithoutCreditosNestedInput
    historial?: HistorialCreditoUpdateManyWithoutCreditoNestedInput
    webhookOutbox?: WebhookOutboxUpdateManyWithoutCreditoNestedInput
  }

  export type CreditoAsociadoUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroCredito?: StringFieldUpdateOperationsInput | string
    identificacionAsociado?: StringFieldUpdateOperationsInput | string
    nombreAsociado?: StringFieldUpdateOperationsInput | string
    idTipoCredito?: IntFieldUpdateOperationsInput | number
    idFormaPago?: IntFieldUpdateOperationsInput | number
    idEstadoCredito?: IntFieldUpdateOperationsInput | number
    idAsesor?: NullableIntFieldUpdateOperationsInput | number | null
    valorSolicitado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tasaInteres?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    numeroCuotas?: IntFieldUpdateOperationsInput | number
    entidadId?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    fechaSolicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    historial?: HistorialCreditoUncheckedUpdateManyWithoutCreditoNestedInput
    webhookOutbox?: WebhookOutboxUncheckedUpdateManyWithoutCreditoNestedInput
  }

  export type CreditoAsociadoUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroCredito?: StringFieldUpdateOperationsInput | string
    identificacionAsociado?: StringFieldUpdateOperationsInput | string
    nombreAsociado?: StringFieldUpdateOperationsInput | string
    idTipoCredito?: IntFieldUpdateOperationsInput | number
    idFormaPago?: IntFieldUpdateOperationsInput | number
    idEstadoCredito?: IntFieldUpdateOperationsInput | number
    idAsesor?: NullableIntFieldUpdateOperationsInput | number | null
    valorSolicitado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tasaInteres?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    numeroCuotas?: IntFieldUpdateOperationsInput | number
    entidadId?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    fechaSolicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditoAsociadoCreateManyAsesorInput = {
    numeroCredito: string
    identificacionAsociado: string
    nombreAsociado: string
    idCliente: number
    idTipoCredito: number
    idFormaPago: number
    idEstadoCredito: number
    valorSolicitado: Decimal | DecimalJsLike | number | string
    tasaInteres: Decimal | DecimalJsLike | number | string
    numeroCuotas: number
    entidadId?: number
    activo?: boolean
    createdBy: string
    updatedBy?: string | null
    fechaSolicitud?: Date | string
    fechaActualizacion?: Date | string
  }

  export type CreditoAsociadoUpdateWithoutAsesorInput = {
    numeroCredito?: StringFieldUpdateOperationsInput | string
    identificacionAsociado?: StringFieldUpdateOperationsInput | string
    nombreAsociado?: StringFieldUpdateOperationsInput | string
    valorSolicitado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tasaInteres?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    numeroCuotas?: IntFieldUpdateOperationsInput | number
    entidadId?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    fechaSolicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    Cliente?: ClienteUpdateOneRequiredWithoutCreditosNestedInput
    TipoCredito?: TipoCreditoUpdateOneRequiredWithoutCreditosNestedInput
    FormaPago?: MetodoPagoUpdateOneRequiredWithoutCreditosNestedInput
    Estado?: EstadoCreditoUpdateOneRequiredWithoutCreditosNestedInput
    historial?: HistorialCreditoUpdateManyWithoutCreditoNestedInput
    webhookOutbox?: WebhookOutboxUpdateManyWithoutCreditoNestedInput
  }

  export type CreditoAsociadoUncheckedUpdateWithoutAsesorInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroCredito?: StringFieldUpdateOperationsInput | string
    identificacionAsociado?: StringFieldUpdateOperationsInput | string
    nombreAsociado?: StringFieldUpdateOperationsInput | string
    idCliente?: IntFieldUpdateOperationsInput | number
    idTipoCredito?: IntFieldUpdateOperationsInput | number
    idFormaPago?: IntFieldUpdateOperationsInput | number
    idEstadoCredito?: IntFieldUpdateOperationsInput | number
    valorSolicitado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tasaInteres?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    numeroCuotas?: IntFieldUpdateOperationsInput | number
    entidadId?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    fechaSolicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
    historial?: HistorialCreditoUncheckedUpdateManyWithoutCreditoNestedInput
    webhookOutbox?: WebhookOutboxUncheckedUpdateManyWithoutCreditoNestedInput
  }

  export type CreditoAsociadoUncheckedUpdateManyWithoutAsesorInput = {
    id?: IntFieldUpdateOperationsInput | number
    numeroCredito?: StringFieldUpdateOperationsInput | string
    identificacionAsociado?: StringFieldUpdateOperationsInput | string
    nombreAsociado?: StringFieldUpdateOperationsInput | string
    idCliente?: IntFieldUpdateOperationsInput | number
    idTipoCredito?: IntFieldUpdateOperationsInput | number
    idFormaPago?: IntFieldUpdateOperationsInput | number
    idEstadoCredito?: IntFieldUpdateOperationsInput | number
    valorSolicitado?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tasaInteres?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    numeroCuotas?: IntFieldUpdateOperationsInput | number
    entidadId?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    fechaSolicitud?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaActualizacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistorialCreditoCreateManyCreditoInput = {
    tipoCambio: string
    idEstadoAnterior?: number | null
    idEstadoNuevo: number
    estadoAnterior?: string | null
    estadoNuevo: string
    usuario: string
    observacion?: string | null
    camposModificados?: string | null
    fecha?: Date | string
  }

  export type WebhookOutboxCreateManyCreditoInput = {
    eventId: string
    eventType: string
    entidadId?: number
    payload: string
    estado?: string
    intentos?: number
    ultimoError?: string | null
    proximoIntento?: Date | string
    fechaCreacion?: Date | string
    fechaEnvio?: Date | string | null
  }

  export type HistorialCreditoUpdateWithoutCreditoInput = {
    tipoCambio?: StringFieldUpdateOperationsInput | string
    estadoAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    estadoNuevo?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    camposModificados?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    EstadoAnterior?: EstadoCreditoUpdateOneWithoutHistorialOrigenNestedInput
    EstadoNuevo?: EstadoCreditoUpdateOneRequiredWithoutHistorialDestinoNestedInput
  }

  export type HistorialCreditoUncheckedUpdateWithoutCreditoInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoCambio?: StringFieldUpdateOperationsInput | string
    idEstadoAnterior?: NullableIntFieldUpdateOperationsInput | number | null
    idEstadoNuevo?: IntFieldUpdateOperationsInput | number
    estadoAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    estadoNuevo?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    camposModificados?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistorialCreditoUncheckedUpdateManyWithoutCreditoInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoCambio?: StringFieldUpdateOperationsInput | string
    idEstadoAnterior?: NullableIntFieldUpdateOperationsInput | number | null
    idEstadoNuevo?: IntFieldUpdateOperationsInput | number
    estadoAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    estadoNuevo?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    observacion?: NullableStringFieldUpdateOperationsInput | string | null
    camposModificados?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookOutboxUpdateWithoutCreditoInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    entidadId?: IntFieldUpdateOperationsInput | number
    payload?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    intentos?: IntFieldUpdateOperationsInput | number
    ultimoError?: NullableStringFieldUpdateOperationsInput | string | null
    proximoIntento?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaEnvio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WebhookOutboxUncheckedUpdateWithoutCreditoInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    entidadId?: IntFieldUpdateOperationsInput | number
    payload?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    intentos?: IntFieldUpdateOperationsInput | number
    ultimoError?: NullableStringFieldUpdateOperationsInput | string | null
    proximoIntento?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaEnvio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WebhookOutboxUncheckedUpdateManyWithoutCreditoInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    entidadId?: IntFieldUpdateOperationsInput | number
    payload?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    intentos?: IntFieldUpdateOperationsInput | number
    ultimoError?: NullableStringFieldUpdateOperationsInput | string | null
    proximoIntento?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaEnvio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}