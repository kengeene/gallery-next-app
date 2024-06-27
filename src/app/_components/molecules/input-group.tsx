export default function InputGroup() {
  return (
    <>
     <label className="block text-light text-lg font-semibold mb-2">Label</label>
     <input type="text" className="bg-background text-light border border-accent rounded-md p-2 w-full" placeholder="Input content"/>
     <p className="text-light text-sm mt-1">Helper text</p>
    </>
  );
}
